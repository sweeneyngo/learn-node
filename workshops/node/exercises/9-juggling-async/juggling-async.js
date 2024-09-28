'use strict'

const http = require('http');

if (process.argv.length != 5) return console.error('Missing three URIs as arguments');

const uriOne = process.argv[2];
const uriTwo = process.argv[3];
const uriThree = process.argv[4];

function getData(uri, callback) {
    http.get(uri, (res) => {

        res.setEncoding('utf-8');
        let result = [];
        res.on('data', (data) => { result.push(data) });
        res.on('end', () => {
            try {
                console.log(result.join(''));
                callback(null);
            } catch (err) {
                callback(err);
            }
        });
        res.on('error', (err) => callback(err));
    }).on('error', (err) => callback(err));
}


getData(uriOne, (err) => {
    if (err) return console.error('Error getting data from first URI: ', err);
    getData(uriTwo, (err) => {
        if (err) return console.error('Error getting data from second URI: ', err);
        getData(uriThree, (err) => {
            if (err) return console.error('Error getting data from third URI: ', err);
            return;
        })
    })
})
