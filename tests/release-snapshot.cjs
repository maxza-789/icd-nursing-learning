'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const {sha256Text}=require('./text-hash.cjs');
const baselines=require('./preservation-baselines.json');
const {ASSETS}=require('./suite-runner.cjs');
function validateSnapshot(files){const results=[];function check(name,fn){try{fn();results.push({name,passed:true});}catch(error){results.push({name,passed:false,error:error.message});}}
 check('seven required release application files exist',()=>ASSETS.forEach(name=>assert.equal(typeof files[name],'string',name)));
 const html=files['index.html']||'';
 check('no Clinical Review Register runtime references',()=>{for(const name of ASSETS)assert(!/clinical-review(?:-data)?\.(?:js|css)|clinical-review["'#]|clinicalReview|NEOICDReview|neoIcdClinicalReviewV1|Clinical Review Register|ทะเบียนทบทวน/.test(files[name]||''),name);});
 check('Governance Notice and educational safety remain visible',()=>{assert(html.includes('id="governance"'));assert(html.includes('Clinical Governance'));assert(html.includes('DRAFT — PENDING SPECIALIST REVIEW'));assert(html.includes('ไม่ใช่ระบบช่วยตัดสินใจทางคลินิก'));});
 const refs=[...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"[^>]*>/g)].map(m=>m[1]);
 check('exactly six relative local script/stylesheet references',()=>{assert.equal(refs.length,6);assert.deepEqual([...refs].sort(),ASSETS.filter(n=>n!=='index.html').sort());for(const ref of refs){assert(!/^[a-z]+:/i.test(ref)&&!ref.startsWith('/')&&!ref.startsWith(String.fromCharCode(92)));const url=new URL(ref,'https://example.invalid/icd-nursing-learning/');assert.equal(url.origin,'https://example.invalid');assert(url.pathname.startsWith('/icd-nursing-learning/'));assert(Object.hasOwn(files,ref),'Broken reference '+ref);}});
 check('CSS dependencies are local and resolvable',()=>{for(const name of ASSETS.filter(n=>n.endsWith('.css'))){const css=files[name];assert(!/@import/i.test(css),'Unspecified CSS dependency');for(const match of css.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)){assert(!/^[a-z]+:/i.test(match[1])&&!match[1].startsWith('/'));assert(Object.hasOwn(files,match[1]));}}});
 check('no external runtime loader or API dependency',()=>{for(const name of ASSETS.filter(n=>n.endsWith('.js')))assert(!/\b(?:import|require|fetch)\s*\(|XMLHttpRequest|WebSocket|sendBeacon|createElement\(['"]script/.test(files[name]),name);});
 const inline=html.match(/<script>([\s\S]*?)<\/script>/)?.[1]||'';
 check('Phase 1 application logic preserved',()=>assert.equal(sha256Text(inline),baselines.phase1Inline.normalizedSha256));
 for(const name of ASSETS.filter(n=>n!=='index.html'))check('committed application content preserved: '+name,()=>assert.equal(sha256Text(files[name]),baselines.files[name].normalizedSha256));
 check('inline and all application scripts parse',()=>{new vm.Script(inline);ASSETS.filter(n=>n.endsWith('.js')).forEach(n=>new vm.Script(files[n]));});
 check('original curriculum counts and exact semantic content preserved',()=>{const modules=JSON.parse(html.match(/const modules=(.*);/)[1]),scenarios=JSON.parse(html.match(/const scenarios=(.*);/)[1]);assert.equal(modules.length,12);assert.equal(modules.flatMap(m=>m.sections).length,49);assert.equal(modules.flatMap(m=>m.quiz).length,24);assert.equal(scenarios.length,3);assert.equal(sha256Text(JSON.stringify(modules)),'dc0bc5701defbceb9cba5bafc51c0fafc0622f957e1bfff7d4e7951e5a475b5b');assert.equal(sha256Text(JSON.stringify(scenarios)),'849252064209ac4976f3dea9a9079703c40bbfd3037bea609bd07f04119a1fcd');});
 check('three fictional cases remain pending review with four stages/twelve choices',()=>{const context=vm.createContext({});vm.runInContext(files['simulation-content.js'],context);const cases=context.NEOICDSimulation.content.cases;assert.equal(cases.length,3);for(const c of cases){assert.equal(c.fictional,true);assert.equal(c.reviewStatus,'pending-specialist-review');assert.equal(c.draftLabel,'DRAFT — PENDING SPECIALIST REVIEW');assert.equal(c.stages.length,4);assert.equal(c.stages.flatMap(s=>s.choices).length,12);assert.equal(c.metadata.reviewerName,null);assert.equal(c.metadata.institutionalApproval,null);}});
 return results;
}
module.exports={validateSnapshot};
