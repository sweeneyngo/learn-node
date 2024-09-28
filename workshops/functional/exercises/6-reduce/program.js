'use strict'


function count(result, word) {
    result[word] = result[word] + 1 || 1;
    return result
}

function countWords(inputWords) {
    return inputWords.reduce(count, {});
}

module.exports = countWords;
