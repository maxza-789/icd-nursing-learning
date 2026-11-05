'use strict';
const crypto=require('node:crypto');
// Normalize line terminators only. Preserve spaces, BOM, Unicode and escaped JSON content.
function normalizeText(text){if(typeof text!=='string')throw TypeError('Expected UTF-8 text');return text.replace(/\r\n?/g,'\n');}
function sha256Text(text){return crypto.createHash('sha256').update(normalizeText(text),'utf8').digest('hex');}
module.exports={normalizeText,sha256Text};
