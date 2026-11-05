// Run with: node tests/knowledge-center.test.cjs
// Dependency-free source and simulated-DOM regression tests; not visual browser QA.
const fs = require('node:fs');
const path = require('node:path');
const vm2 = require('node:vm');
const assert2 = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const indexScript2 = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const centerJs2 = fs.readFileSync(path.join(root, 'knowledge-center.js'), 'utf8');
const modules = JSON.parse(html.match(/const modules=(.*);/)[1]);
const scenarios = JSON.parse(html.match(/const scenarios=(.*);/)[1]);
const {sha256Text}=require('./text-hash.cjs');
const hash = value => sha256Text(JSON.stringify(value));
assert2.equal(hash(modules), 'dc0bc5701defbceb9cba5bafc51c0fafc0622f957e1bfff7d4e7951e5a475b5b', 'Original modules, sections, quiz answers and rationales must remain unchanged');
assert2.equal(hash(scenarios), '849252064209ac4976f3dea9a9079703c40bbfd3037bea609bd07f04119a1fcd', 'Original scenarios must remain unchanged');
assert2.equal(modules.length, 12);
assert2.equal(modules.flatMap(m => m.sections).length, 49);
assert2.equal(modules.flatMap(m => m.quiz).length, 24);
assert2.equal(scenarios.length, 3);
new vm2.Script(indexScript2);
new vm2.Script(centerJs2);
assert2(!/localStorage\.(setItem|removeItem)|fetch\(|XMLHttpRequest|innerHTML\s*=/.test(centerJs2));
function makeKnowledgeHarness2(seed={},blocked=false){const ids=new Map(),writes=[];const storage={...seed};class Element{constructor(tag='div'){this.tagName=tag;this.children=[];this.events={};this.style={};this.attributes={};this._text='';this._id='';this._html='';this.value='';this.checked=false;this.hidden=false;this.className='';this.classList={add:()=>{}}}set id(id){this._id=id;ids.set(id,this)}get id(){return this._id}set textContent(text){this._text=String(text);this.children=[]}get textContent(){return this._text+this.children.map(c=>c.textContent||'').join('')}set innerHTML(text){this._html=text}get innerHTML(){return this._html}append(...nodes){this.children.push(...nodes)}replaceChildren(...nodes){this._text='';this.children=[...nodes]}setAttribute(k,v){this.attributes[k]=String(v)}addEventListener(name,fn){(this.events[name]??=[]).push(fn)}fire(name){const event={target:this,preventDefault(){}};(this.events[name]||[]).forEach(fn=>fn(event))}focus(){this.focused=true}scrollIntoView(){this.scrolled=true}}
function get(id){if(!ids.has(id)){const n=new Element();n.id=id}return ids.get(id)}
const checked={};const context={console,document:{getElementById:get,createElement:tag=>new Element(tag),querySelector:selector=>checked[selector]||null},localStorage:{getItem(key){if(blocked)throw Error('blocked');return storage[key]??null},setItem(key,value){if(blocked)throw Error('blocked');writes.push(key);storage[key]=value}},window:{addEventListener(){}},matchMedia:()=>({matches:false}),location:{hash:''},history:{pushState(){},replaceState(){}},confirm:()=>true};vm2.createContext(context);vm2.runInContext(indexScript2,context);vm2.runInContext(centerJs2,context);function all(root,tag){return root.children.flatMap(c=>[...(c.tagName===tag?[c]:[]),...all(c,tag)])}return {ids,get,writes,storage,context,checked,all,run:code=>vm2.runInContext(code,context)}}
const h = makeKnowledgeHarness2({neoIcdDone:'[0,2]',neoIcdV2:JSON.stringify({visited:[0,2,5],completed:[0,2],last:5,answers:{5:[1,0]},scores:{5:2},attempts:{5:1}})});
assert2.equal(h.get('knowledgeContent').children.length,5);
assert2.equal(h.all(h.get('quick-knowledge'),'article').length,20);
assert2.equal(h.run('completed.join()'),'0,2');
assert2.equal(h.run('state.last'),5);
const search=h.get('knowledgeSearch');
for(const text of ['ความปวด','pain','tidaling','น้ำแกว่ง','haemothorax','SBAR']){search.value=text;search.fire('input');assert2(h.all(h.get('quick-knowledge'),'article').length>0,text)}
search.value='<script>alert(1)</script>';search.fire('input');assert2.equal(h.all(h.get('quick-knowledge'),'article').length,0);
search.value='';search.fire('input');assert2.equal(h.all(h.get('quick-knowledge'),'article').length,20);
for(const id of ['quick-knowledge','shift-assessment','during-shift','how-to-guides','sbar-handover']){assert2(h.get(id).textContent.includes('DRAFT — PENDING SPECIALIST REVIEW'));assert2(h.get(id).textContent.includes('ผู้ทบทวน (Reviewer)'));assert2(h.get(id).textContent.includes('การอนุมัติโรงพยาบาล (Local approval)'))}
for(const [id,total] of [['shift-assessment',7],['during-shift',6]]){const node=h.get(id),boxes=h.all(node,'input');assert2.equal(boxes.length,total);boxes[0].checked=true;boxes[0].fire('change');assert2(node.textContent.includes('ทบทวนหัวข้อแล้ว 1 / '+total));h.all(node,'button')[0].fire('click');assert2(boxes.every(box=>!box.checked))}
const guides=h.all(h.get('how-to-guides'),'details').filter(n=>n.className==='kc-guide');assert2.equal(guides.length,3);guides.forEach(n=>assert2.equal(h.all(n,'li').length,3));
const sbar=h.get('sbar-handover'),form=h.all(sbar,'form')[0];
form.fire('submit');assert2(h.get('sbarFeedback').textContent.includes('ยังไม่มีข้อความ'));
for(let i=0;i<4;i++)h.get('sbar-'+i).value=i===0?'<img src=x onerror=alert(1)>':'ข้อมูลสมมติ';
form.fire('submit');assert2(h.get('sbarFeedback').textContent.includes('ยังไม่ได้รับการประเมิน'));assert2.equal(h.all(sbar,'img').length,0);assert2(sbar.textContent.includes('<img src=x'));
h.get('sbar-0').fire('input');assert2.equal(h.get('sbarFeedback').textContent,'');
h.get('sbarCase').value='1';h.get('sbarCase').fire('change');assert2(h.get('sbarCaseText').textContent.includes('ทารกสมมติ ข'));assert2.equal(h.get('sbar-0').value,'');
h.get('sbar-0').value='ข้อความสมมติ';h.all(sbar,'button').find(b=>b.textContent==='ล้างข้อความฝึก').fire('click');assert2.equal(h.get('sbar-0').value,'');
assert2.equal(h.writes.length,0,'Knowledge interactions must not write progress or SBAR text');
for(const link of h.all(h.get('knowledgeContent'),'a').filter(a=>(a.href||'').startsWith('#module-'))){const match=link.href.match(/^#module-(\d+)-topic-(\d+)$/);assert2(match);assert2(modules[Number(match[1])-1].sections[Number(match[2])])}
const firstLink=h.all(h.get('quick-knowledge'),'a').find(a=>(a.href||'').startsWith('#module-'));firstLink.fire('click');assert2.equal(h.run('current'),3);
for(const item of [{neoIcdDone:'{broken',neoIcdV2:'false'},{neoIcdDone:'[0,0,99,-1,"1"]',neoIcdV2:'{}'}]){const safe=makeKnowledgeHarness2(item);assert2.equal(safe.get('knowledgeContent').children.length,5)}
const blocked=makeKnowledgeHarness2({},true);blocked.run('openModule(1)');assert2(blocked.get('storageNotice').textContent.includes('บันทึกความคืบหน้าไม่ได้'));
const quiz=makeKnowledgeHarness2();for(let i=0;i<12;i++){quiz.run('openModule('+i+')');modules[i].quiz.forEach((q,j)=>quiz.checked['input[name="q'+i+'-'+j+'"]:checked']={value:String(q.a)});quiz.run('grade('+i+')');assert2.equal(quiz.run('state.scores['+i+']'),2)}
assert2.equal(quiz.run('completed.length'),12);assert2.equal(quiz.get('progressMeter').attributes['aria-valuenow'],'100');
scenarios.forEach((s,i)=>{quiz.run('answerCase('+i+','+s.correct+')');assert2(quiz.get('case-'+i).textContent.endsWith(s.why))});
quiz.run('resetProgress()');assert2.equal(quiz.run('completed.length'),0);
console.log('PASS: content preservation; five sections; bilingual search; checklists; guide metadata; SBAR privacy/feedback; module links; storage failures; all 24 quiz answers; three scenarios; progress/reset.');
