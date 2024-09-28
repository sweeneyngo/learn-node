'use strict'

const filterFiles = require('./filter-files');

if (process.argv.length != 4) return console.error('No directory and file extension found');

const dir = process.argv[2];
const ext = process.argv[3];

filterFiles(dir, ext, (err, files) => {
    if (err) return console.error('Error filtering files: ', err);
    for (const file of files) console.log(file);
});
