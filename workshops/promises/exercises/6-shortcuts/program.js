'use strict'

const ok = Promise.resolve('OK');
const err = Promise.reject(new Error('ERROR'));

err.catch(error => { console.error(error) });
