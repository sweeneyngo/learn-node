'use strict'

function duckCount() {
    return Array.prototype.slice.call(arguments)
        .filter(object => Object.prototype.hasOwnProperty.call(object, 'quack')).length;
}

module.exports = duckCount;
