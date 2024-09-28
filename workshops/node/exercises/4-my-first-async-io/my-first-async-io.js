'use strict'

const fs = require('fs');
if (process.argv.length != 3) return console.error('No file found');


fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) return console.error('Error reading file: ', err);
    countLines(data);
});

function countLines(data) {
    const numLines = data.split('\n').length - 1;

    if (numLines.length === 0) return console.log(0);
    return console.log(numLines);
}
