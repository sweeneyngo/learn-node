'use strict'

const fs = require('fs');
const path = require('path');

function filterFiles(dir, ext, callback) {
    fs.readdir(dir, 'utf-8', (err, files) => {
        if (err) return callback(err);

        const filterFilesByExt = files.filter(file => path.extname(file) === '.' + ext);
        return callback(null, filterFilesByExt);
    });
}

module.exports = filterFiles;
