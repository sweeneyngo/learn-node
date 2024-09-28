'use strict'

const promise = new Promise((fulfill, reject) => {
    try {
        setTimeout(() => {
            fulfill('FULFILLED!');
        }, 300);
    } catch (err) {
        reject(err);
    }
});

promise.then((data) => console.log(data));
