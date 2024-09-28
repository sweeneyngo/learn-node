'use strict'

const net = require('net');

if (process.argv.length != 3) return console.error('No port found');
const port = process.argv[2];


function padZero(num) {
    return (num < 10 ? '0' : '') + num
}

function getTimeDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
    socket.write(getTimeDate() + '\n');
    socket.end();
}).on('error', (err) => console.err('Error creating server: ', err));

server.listen(port);
