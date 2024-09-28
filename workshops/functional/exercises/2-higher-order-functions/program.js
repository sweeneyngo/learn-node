'use strict'

function repeat(operation, num) {
    console.log(num);
    if (num <= 0) return;
    operation();
    return repeat(operation, num-1);
}

module.exports = repeat;
