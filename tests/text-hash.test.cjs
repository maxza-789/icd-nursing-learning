'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{normalizeText,sha256Text}=require('./text-hash.cjs');
const {ASSETS}=require('./suite-runner.cjs');
let count=0;function test(name,fn){try{fn();count++;}catch(error){error.message=name+': '+error.message;throw error;}}
const sample='ข้อความภาษาไทย (Baseline)\nline two\n';
test('deterministic normalization is exact',()=>assert.equal(normalizeText('a\r\nb\rc\n'),'a\nb\nc\n'));
test('LF and CRLF hash equally',()=>assert.equal(sha256Text(sample),sha256Text(sample.replace(/\n/g,'\r\n'))));
test('lone CR normalizes too',()=>assert.equal(sha256Text(sample),sha256Text(sample.replace(/\n/g,'\r'))));
test('normalization is idempotent',()=>assert.equal(normalizeText(normalizeText(sample)),normalizeText(sample)));
for(const [label,changed]of [['content',sample.replace('Baseline','Changed')],['space',sample+' '],['BOM','\uFEFF'+sample],['Unicode',sample.replace('ไทย','ไท')],['escaped JSON newline',JSON.stringify({value:'a\r\nb'})]])test('real '+label+' changes hash',()=>assert.notEqual(sha256Text(changed),sha256Text(sample)));
test('escaped JSON content is preserved',()=>assert.notEqual(sha256Text(JSON.stringify({value:'a\r\nb'})),sha256Text(JSON.stringify({value:'a\nb'}))));
test('non-text fails rather than coercing data',()=>assert.throws(()=>sha256Text({value:'x'}),error=>error.name==='TypeError'));
for(const name of ASSETS){const text=fs.readFileSync(path.join(__dirname,'..',name),'utf8'),lf=normalizeText(text);test(name+' LF CRLF CR preservation',()=>{assert.equal(sha256Text(lf),sha256Text(lf.replace(/\n/g,'\r\n')));assert.equal(sha256Text(lf),sha256Text(lf.replace(/\n/g,'\r')));});test(name+' changed content fails preservation',()=>assert.notEqual(sha256Text(text),sha256Text(text+' /* QA mutation */')));}
console.log('PASS: '+count+' named normalization tests; 0 failed.');
