'use strict'

function reduce(arr, fn, initial) {

    function iterate(index, currentValue) {
        if (index >= arr.length) return currentValue;
        const nextValue = arr[index];

        return iterate(index+1, fn(currentValue, nextValue, index+1, arr))
    }

    return iterate(0, initial);
}

module.exports = reduce;
