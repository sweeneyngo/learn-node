'use strict'

const fs = require('fs');
const http = require('http');

if (process.argv.length != 4) return console.error('No port and file path found');

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/plain'});
    const stream = fs.createReadStream(path);
    stream.pipe(res);

}).on('error', (err) => console.err('Error creating server: ', err));

server.listen(port);
