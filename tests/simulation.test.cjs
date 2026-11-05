// Run: node tests/simulation.test.cjs
// Tests use a simulated DOM; real-browser/accessibility checks remain separate.
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const indexScript2=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const centerJs2=fs.readFileSync(path.join(root,'knowledge-center.js'),'utf8');
const names=['simulation-content.js','simulation-storage.js','simulation-engine.js'];
const code=Object.fromEntries(names.map(name=>[name,fs.readFileSync(path.join(root,name),'utf8')]));
const plain=value=>JSON.parse(JSON.stringify(value));
const hash=text=>crypto.createHash('sha256').update(text).digest('hex');
const preserved={
  "knowledge-center.js": "cd59fe0daae25ef8bb5b27dbf825e4119ce880db09c93c80b7c97f8575f0b3d5",
  "knowledge-center.css": "707d1614f5332eb101bd742d7ae2f1c18df01638956c64c5c86426bde4f74445",
  "tests/knowledge-center.test.cjs": "a4170242bacd073cc5c9a4775bf217a8469efe7b96b095e21455d46ce8383bf9",
  "README.txt": "e2b13ac48c3067dcda05d48990fed62fa2aee61047924d07715c4b26cc9615ab"
};
for(const [name,expected] of Object.entries(preserved))assert.equal(hash(fs.readFileSync(path.join(root,name),'utf8')),expected,'Preserve '+name);
assert.equal(hash(indexScript2),'3177481e8667bb69b3c7e81b42ebad0975cdac0499eb909fb2862e4cc707ee3f','Preserve Phase 1 application logic');
const modules=JSON.parse(html.match(/const modules=(.*);/)[1]);
const scenarios=JSON.parse(html.match(/const scenarios=(.*);/)[1]);
assert.equal(modules.length,12);assert.equal(modules.flatMap(m=>m.sections).length,49);assert.equal(modules.flatMap(m=>m.quiz).length,24);assert.equal(scenarios.length,3);
assert.equal(hash(JSON.stringify(modules)),'dc0bc5701defbceb9cba5bafc51c0fafc0622f957e1bfff7d4e7951e5a475b5b');
assert.equal(hash(JSON.stringify(scenarios)),'849252064209ac4976f3dea9a9079703c40bbfd3037bea609bd07f04119a1fcd');
const pure=vm.createContext({document:{getElementById:()=>null}});
for(const name of names){new vm.Script(code[name]);vm.runInContext(code[name],pure)}
const ns=pure.NEOICDSimulation,c=ns.content.cases[0];
assert.equal(ns.content.cases.length,3,'Cases 1, 2 and 3 are implemented');assert(ns.storage.validateContent(ns.content));
const badContent=plain(ns.content);badContent.cases[0].stages[1].id=badContent.cases[0].stages[0].id;assert.throws(()=>ns.storage.validateContent(badContent));
const missingFeedback=plain(ns.content);delete missingFeedback.cases[0].stages[0].choices[0].explanation.alternative;assert.throws(()=>ns.storage.validateContent(missingFeedback));
const missingDebrief=plain(ns.content);missingDebrief.cases[0].debrief.reflection=[];assert.throws(()=>ns.storage.validateContent(missingDebrief));
for(const topic of ns.content.topics)assert(modules[topic.module].sections[topic.section]);
for(const stage of c.stages){assert(stage.observations.length);assert(stage.knownInformation.length);assert(stage.missingInformation.length);for(const choice of stage.choices){for(const field of ['support','missing','alternative','communication'])assert(choice.explanation[field]);assert(choice.learningEvidence.length);assert(choice.reviewTopics.length)}}
function memory(seed={}){const values={...seed},writes=[];return {values,writes,provider:()=>({getItem:key=>values[key]??null,setItem:(key,value)=>{writes.push(key);values[key]=value}})}}
const mem=memory({neoIcdDone:'[0,2]',neoIcdV2:'{"last":2}'}),store=ns.storage.createStore(c,mem.provider),ctl=ns.engine.createController(c,store);
assert.equal(ctl.current(),null);assert.equal(mem.writes.length,0);assert(ctl.start());
assert.equal(ctl.go(c.stages[2].id),false);assert.equal(ctl.select(c.stages[1].id,c.stages[1].choices[0].id),false);assert.equal(ctl.select(c.stages[0].id,'unknown'),false);assert.equal(ctl.finish(),false);
assert(ctl.select(c.stages[0].id,c.stages[0].choices[1].id));assert.equal(ctl.select(c.stages[0].id,c.stages[0].choices[0].id),false);
assert.equal(ctl.current().selections[c.stages[0].id],c.stages[0].choices[1].id);
const resumed=ns.engine.createController(c,ns.storage.createStore(c,mem.provider));assert.equal(resumed.current().id,ctl.current().id);assert.equal(resumed.current().stageId,c.stages[0].id);assert.deepEqual(plain(resumed.current().selections),plain(ctl.current().selections));
for(const stage of c.stages.slice(1)){assert(ctl.go(stage.id));assert(ctl.select(stage.id,stage.choices[0].id))}
assert(ctl.finish());assert.equal(ctl.current().status,'completed');assert.equal(ctl.current().stageId,'debrief');assert(ctl.evidence().some(e=>e.indicator==='review'));assert(ctl.topics().includes('patient-first'));assert.equal(ctl.select(c.stages[0].id,c.stages[0].choices[2].id),false);
const first=plain(ctl.current());assert(ctl.go(c.stages[0].id));assert.deepEqual(plain(ctl.current().selections),first.selections);assert(ctl.start());assert.equal(store.snapshot().attempts.length,2);assert.deepEqual(plain(store.snapshot().attempts[0].selections),first.selections);assert(ctl.review(first.id));
for(let i=0;i<8;i++)ctl.start();assert.equal(store.snapshot().attempts.length,5);assert.equal(new Set(store.snapshot().attempts.map(a=>a.id)).size,5);assert.equal(store.snapshot().attemptCount,10);assert(mem.writes.every(key=>key==='neoIcdSimulationV1'));assert.equal(mem.values.neoIcdDone,'[0,2]');assert.equal(mem.values.neoIcdV2,'{"last":2}');
for(const raw of ['{broken','null','[]','{"schemaVersion":1,"caseId":"wrong","attempts":[]}','x'.repeat(100001)]){const s=ns.storage.createStore(c,memory({neoIcdSimulationV1:raw}).provider);assert.equal(s.snapshot().attempts.length,0);assert(s.notice());assert(s.start())}
const denied=ns.storage.createStore(c,()=>{throw Error('blocked')});assert(denied.notice());assert(denied.start());assert(denied.notice().includes('บันทึกการฝึกไม่ได้'));
const quota=ns.storage.createStore(c,()=>({getItem:()=>null,setItem:()=>{throw Error('quota')}}));assert(quota.start());assert(quota.notice().includes('บันทึกการฝึกไม่ได้'));
const future=memory({neoIcdSimulationV1:'{"schemaVersion":2,"futureData":"keep"}'});const futureStore=ns.storage.createStore(c,future.provider);futureStore.start();assert.equal(future.writes.length,0);assert.equal(future.values.neoIcdSimulationV1,'{"schemaVersion":2,"futureData":"keep"}');
const old=memory();const oldStore=ns.storage.createStore(c,old.provider);const oldAttempt=oldStore.start();oldStore.select(oldAttempt.id,c.stages[0].id,c.stages[0].choices[0].id);const nextCase=plain(c);nextCase.contentVersion='2.0.0';const versionStore=ns.storage.createStore(nextCase,old.provider);assert.equal(versionStore.latest(),null);assert.equal(versionStore.snapshot().attempts[0].status,'archived');assert.equal(versionStore.snapshot().attempts[0].selections.baseline,c.stages[0].choices[0].id);versionStore.start();assert.equal(versionStore.snapshot().attempts.length,2);
const dirty=plain(store.snapshot());dirty.attempts[0].patientName='FORBIDDEN';dirty.attempts[0].reflection='FORBIDDEN';dirty.freeText='FORBIDDEN';const cleaned=ns.storage.createStore(c,memory({neoIcdSimulationV1:JSON.stringify(dirty)}).provider);assert(!JSON.stringify(cleaned.snapshot()).includes('FORBIDDEN'));
for(const name of names)assert(!/\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|new Image|innerHTML\s*=|eval\s*\(/.test(code[name]),'No transmission or unsafe HTML: '+name);
assert(!/neoIcdDone|neoIcdV2/.test(code['simulation-storage.js']));
function makeHarness(seed={},blocked=false){const ids=new Map(),writes=[];const storage={...seed};class Element{constructor(tag='div'){this.tagName=tag;this.children=[];this.events={};this.style={};this.attributes={};this._text='';this._id='';this._html='';this.value='';this.checked=false;this.hidden=false;this.className='';this.classList={add:()=>{}}}set id(id){this._id=id;ids.set(id,this)}get id(){return this._id}set textContent(text){this._text=String(text);this.children=[]}get textContent(){return this._text+this.children.map(c=>c.textContent||'').join('')}set innerHTML(text){this._html=text}get innerHTML(){return this._html}append(...nodes){this.children.push(...nodes)}replaceChildren(...nodes){this._text='';this.children=[...nodes]}setAttribute(k,v){this.attributes[k]=String(v)}addEventListener(name,fn){(this.events[name]??=[]).push(fn)}fire(name){const event={target:this,preventDefault(){}};(this.events[name]||[]).forEach(fn=>fn(event))}focus(){this.focused=true}scrollIntoView(){this.scrolled=true}}
function get(id){if(!ids.has(id)){const n=new Element();n.id=id}return ids.get(id)}
const checked={};const context={console,document:{getElementById:get,createElement:tag=>new Element(tag),querySelector:selector=>checked[selector]||null},localStorage:{getItem(key){if(blocked)throw Error('blocked');return storage[key]??null},setItem(key,value){if(blocked)throw Error('blocked');writes.push(key);storage[key]=value}},window:{addEventListener(){}},matchMedia:()=>({matches:false}),location:{hash:''},history:{pushState(){},replaceState(){}},confirm:()=>true};vm.createContext(context);vm.runInContext(indexScript2,context);vm.runInContext(centerJs2,context);function all(root,tag){return root.children.flatMap(c=>[...(c.tagName===tag?[c]:[]),...all(c,tag)])}return {ids,get,writes,storage,context,checked,all,run:code=>vm.runInContext(code,context)}}
const ui=makeHarness({neoIcdDone:'[0,2]'});for(const name of names)vm.runInContext(code[name],ui.context);
const node=()=>ui.get('simulationContent');const all=(tag)=>ui.all(node(),tag);const press=text=>{const b=all('button').find(b=>b.textContent===text);assert(b,'Button: '+text);assert(!b.disabled,'Enabled: '+text);b.fire('click')};
assert(node().textContent.includes(c.title));assert.equal(ui.writes.length,0);press('เริ่มกรณีที่ 1');assert(ui.get('simulationStageTitle').textContent.includes('ขั้นที่ 1'));assert.equal(all('button').find(b=>b.textContent==='ขั้นถัดไป').disabled,true);
for(let i=0;i<c.stages.length;i++){press(c.stages[i].choices[0].text);assert(node().textContent.includes(c.stages[i].choices[0].explanation.alternative));assert(node().textContent.includes(c.stages[i].choices[0].explanation.communication));if(i<c.stages.length-1)press('ขั้นถัดไป');else press('อ่านสรุปและสะท้อนคิด')}
assert(node().textContent.includes('หลักฐานการเรียนรู้'));assert(ui.get('simulationDashboard').textContent.includes('เรียนจบรุ่นปัจจุบันในประวัติที่เก็บ 1'));
ui.get('simulationReflection').value='DO-NOT-STORE-REFLECTION';assert(!ui.storage.neoIcdSimulationV1.includes('DO-NOT-STORE-REFLECTION'));
press('ย้อนอ่านขั้นแรก');assert(!ui.storage.neoIcdSimulationV1.includes('DO-NOT-STORE-REFLECTION'));assert(all('button').filter(b=>b.className==='sim-choice').every(b=>b.disabled));press('กลับหน้ารายการกรณี');assert(node().textContent.includes('ประวัติรอบฝึก'));
assert.equal(ui.storage.neoIcdDone,'[0,2]');assert(!Object.hasOwn(ui.storage,'neoIcdV2'));
const refresh=makeHarness(ui.storage);for(const name of names)vm.runInContext(code[name],refresh.context);assert(refresh.get('simulationContent').textContent.includes('ทบทวนรอบฝึกล่าสุด'));assert(!refresh.get('simulationContent').textContent.includes('DO-NOT-STORE-REFLECTION'));
const unavailable=makeHarness({},true);for(const name of names)vm.runInContext(code[name],unavailable.context);const start=unavailable.all(unavailable.get('simulationContent'),'button').find(b=>b.textContent==='เริ่มกรณีที่ 1');start.fire('click');assert(unavailable.get('simulationNotice').textContent.includes('บันทึกการฝึกไม่ได้'));
assert(/id="simulationAnnounce"[^>]*role="status"[^>]*aria-live="polite"/.test(html));
for(const name of names)assert(html.includes('src="'+name+'"'));assert(html.includes('href="simulation.css"'));

// Exercise every decision path without branching the fictional observations or outcomes.
for(let stageIndex=0;stageIndex<c.stages.length;stageIndex++){
 for(const choice of c.stages[stageIndex].choices){
  const local=ns.engine.createController(c,ns.storage.createStore(c,memory().provider));
  local.start();
  for(let index=0;index<stageIndex;index++){local.go(c.stages[index].id);local.select(c.stages[index].id,c.stages[index].choices[0].id)}
  local.go(c.stages[stageIndex].id);assert(local.select(c.stages[stageIndex].id,choice.id));
  assert.equal(local.current().selections[c.stages[stageIndex].id],choice.id);
  assert(local.evidence().some(e=>e.choiceId===choice.id));
 }
}
const gapData={schemaVersion:1,caseId:c.id,attemptCount:1,attempts:[{id:'attempt-1',contentVersion:c.contentVersion,status:'completed',stageId:'debrief',selections:{[c.stages[1].id]:c.stages[1].choices[0].id}}]};
const gapStore=ns.storage.createStore(c,memory({neoIcdSimulationV1:JSON.stringify(gapData)}).provider);
assert.equal(Object.keys(gapStore.latest().selections).length,0);assert.equal(gapStore.latest().status,'in-progress');assert.equal(gapStore.latest().stageId,c.stages[0].id);

console.log('PASS: schema/unique IDs, all choice feedback, staged navigation, immutable history, bounded attempts, resume, corruption/quota/blocked storage, content/schema versions, privacy, debrief/evidence, UI flow and original-content preservation.');
