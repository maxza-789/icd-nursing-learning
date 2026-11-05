'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{createRequire}=require('node:module'),{execFileSync}=require('node:child_process');
const ROOT=path.resolve(__dirname,'..');
const ASSETS=['index.html','knowledge-center.js','knowledge-center.css','simulation-content.js','simulation-engine.js','simulation-storage.js','simulation.css'];
const PHASE_SUITES=['knowledge-center.test.cjs','simulation.test.cjs','simulation-case2.test.cjs','simulation-case3.test.cjs'];
function loadSnapshot(ref){const files={};for(const name of [...ASSETS,'README.txt'])files[name]=ref?execFileSync('git',['show',ref+':'+name],{cwd:ROOT,encoding:'utf8'}):fs.readFileSync(path.join(ROOT,name),'utf8');return files;}
function runSuite(name,{files,transform=text=>text}={}){
 const filename=path.join(__dirname,name),actualRequire=createRequire(filename),logs=[];
 const readFs=files?{readFileSync(file,encoding){const relative=path.relative(ROOT,String(file)).split(path.sep).join('/');let text;if(Object.hasOwn(files,relative))text=files[relative];else if(relative.startsWith('tests/'))text=fs.readFileSync(file,'utf8');else throw Error('Missing release file: '+relative);return transform(text);}}:fs;
 const localRequire=name=>name==='node:fs'?readFs:actualRequire(name);
 try{vm.runInNewContext(fs.readFileSync(filename,'utf8'),{require:localRequire,__dirname,console:{log:(...args)=>logs.push(args.join(' '))}},{filename});const named=logs.map(line=>line.match(/^PASS: (\d+)/)).filter(Boolean).reduce((sum,m)=>sum+Number(m[1]),0);return {name,passed:true,named,logs};}catch(error){return {name,passed:false,named:0,error:error.stack,logs};}
}
module.exports={ROOT,ASSETS,PHASE_SUITES,loadSnapshot,runSuite};
