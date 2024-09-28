'use strict'

const promise = new Promise((fulfill, reject) => {
    fulfill('PROMISE VALUE');
})

promise.then((data) => console.log(data));
console.log('MAIN PROGRAM');
