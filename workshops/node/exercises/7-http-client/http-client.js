'use strict'

const http = require('http');

if (process.argv.length != 3) return console.error('No URI found');
const uri = process.argv[2];

http.get(uri, (res) => {

    res.setEncoding('utf-8');
    let result = [];
    res.on('data', (data) => { result.push(data) });
    res.on('end', () => {
        try {
            for (const item of result) console.log(item);
        } catch (err) {
            console.error('Error printing data: ', err);
        }
    });
    res.on('error', (err) => console.error('Error getting data: ', err));
}).on('error', (err) => console.error('Error handling GET: ', err));
