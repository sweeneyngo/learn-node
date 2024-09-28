'use strict'

const map = require('through2-map');
const url = require('url');
const http = require('http');

if (process.argv.length != 3) return console.error('No port found');

const port = process.argv[2];

const server = http.createServer().on('error', (err) => console.err('Error creating server: ', err));
server.on('request', (req, res) => {

    if (req.method !== 'GET') return res.end('No GET found\n');

    const url = new URL(req.url, 'http://localhost:' + port);

    if (url.pathname === '/api/parsetime') {
        const date = new Date(url.searchParams.get('iso'));

        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }

        res.writeHead(200, { 'content-type': 'application/json'});
        res.end(JSON.stringify(result));
    }

    if (url.pathname === '/api/unixtime') {
        const date = new Date(url.searchParams.get('iso'));
        const result = {
            unixtime: date.getTime()
        }
        res.writeHead(200, { 'content-type': 'application/json'});
        res.end(JSON.stringify(result));
    }

    res.writeHead(404);
    res.end();
})

server.listen(port);
