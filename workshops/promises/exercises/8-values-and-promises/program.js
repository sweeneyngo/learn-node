'use strict'

function attachTitle(arg) {
    return 'DR. ' + arg;
}

const promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);
