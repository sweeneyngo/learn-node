'use strict'

const promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})

function onRejected(error) {
    console.log(error.message);
}

promise.then((data) => console.log(data), onRejected);
