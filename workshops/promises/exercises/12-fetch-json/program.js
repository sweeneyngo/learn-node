'use strict'

const qhttp = require('q-io/http');

qhttp.read('http://localhost:1337')
    .then(res => console.log(JSON.parse(res)))
    .then(null, console.error)
    .done()
