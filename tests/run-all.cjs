#!/usr/bin/env node
'use strict';
const {PHASE_SUITES,loadSnapshot,runSuite}=require('./suite-runner.cjs');
const {validateSnapshot}=require('./release-snapshot.cjs');
function main(args=process.argv.slice(2)){
 let ref;
 if(args.length){if(args.length!==2||args[0]!=='--ref'||!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(args[1])){console.error('Usage: node tests/run-all.cjs [--ref <local-release-commit-or-ref>]');return 1;}ref=args[1];}
 let files;try{files=loadSnapshot(ref);}catch(error){console.error('FAIL: unable to read release snapshot:',error.message);return 1;}
 console.log('Validating '+(ref||'working-tree release application files')+'; no source normalization or replacement.');
 let failures=0,named=0,suites=0;
 for(const result of validateSnapshot(files)){console.log((result.passed?'PASS: ':'FAIL: ')+result.name);if(!result.passed){failures++;console.error(result.error);}}
 for(const name of PHASE_SUITES){const result=runSuite(name,{files});suites++;console.log((result.passed?'PASS suite: ':'FAIL suite: ')+name);result.logs.forEach(line=>console.log('  '+line));if(!result.passed){failures++;console.error(result.error);}named+=result.named;}
 for(const name of ['text-hash.test.cjs','release-validation.test.cjs']){const result=runSuite(name);suites++;console.log((result.passed?'PASS suite: ':'FAIL suite: ')+name);result.logs.forEach(line=>console.log('  '+line));if(!result.passed){failures++;console.error(result.error);}named+=result.named;}
 for(const [label,transform]of [['LF',text=>text.replace(/\r\n?/g,'\n')],['CRLF',text=>text.replace(/\r\n?/g,'\n').replace(/\n/g,'\r\n')]]){
  const variant=Object.fromEntries(Object.entries(files).map(([name,text])=>[name,transform(text)]));
  const checks=validateSnapshot(variant);const failed=checks.filter(c=>!c.passed);console.log((failed.length?'FAIL: ':'PASS: ')+label+' snapshot matrix ('+checks.length+' checks)');failures+=failed.length;failed.forEach(c=>console.error(c.name+': '+c.error));
  for(const name of PHASE_SUITES){const result=runSuite(name,{files:variant,transform});suites++;console.log((result.passed?'PASS suite: ':'FAIL suite: ')+label+' '+name);if(!result.passed){failures++;console.error(result.error);}}
 }
 console.log('SUMMARY: '+named+' named tests in primary run; '+suites+' suite executions; '+failures+' failures. Matrix repeats are not added to named-test total.');
 return failures?1:0;
}
if(require.main===module)process.exitCode=main();
module.exports={main};
