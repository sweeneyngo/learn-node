'use strict'

const fs = require('fs');
if (process.argv.length != 3) return console.error('No file found');

const str = fs.readFileSync(process.argv[2], 'utf-8');
const numLines = str.split('\n').length - 1;

if (numLines.length === 0) return console.log(0);
console.log(numLines);
