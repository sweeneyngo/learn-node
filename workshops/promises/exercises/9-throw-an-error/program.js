'use strict'

const invalidData = process.argv[2];

function parsePromised() {
  return new Promise((fulfill, reject) => {
    try {
        const parsedData = JSON.parse(invalidData);
        fulfill(parsedData);
    } catch (err) {
        reject(err);
    }
  });
}

parsePromised()
    .then(console.log)
    .then(null, err => { console.log(err.message) } );
