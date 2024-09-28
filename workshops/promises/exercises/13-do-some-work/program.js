'use strict'

const qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
    .then(userId => qhttp.read('http://localhost:7001/' + userId))
    .then(data => console.log(JSON.parse(data)))
    .then(null, console.error)
    .done()
