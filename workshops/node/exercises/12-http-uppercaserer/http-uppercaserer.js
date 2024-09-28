'use strict'

const map = require('through2-map');
const http = require('http');

if (process.argv.length != 3) return console.error('No port found');

const port = process.argv[2];

const server = http.createServer().on('error', (err) => console.err('Error creating server: ', err));
server.on('request', (req, res) => {

    if (req.method !== 'POST') return res.end('No POST found\n');

    res.writeHead(200, { 'content-type': 'text/plain'});
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

server.listen(port);
