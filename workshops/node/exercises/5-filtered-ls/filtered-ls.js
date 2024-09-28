'use strict'

const fs = require('fs');
const path = require('path');

if (process.argv.length != 4) return console.error('No directory and file extension found');

const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, 'utf-8', (err, files) => {
    if (err) console.error('Error reading dir: ', err);

    const filterFilesByExt = files.filter(file => path.extname(file) === ext);
    for (const file of filterFilesByExt) console.log(file);
})
