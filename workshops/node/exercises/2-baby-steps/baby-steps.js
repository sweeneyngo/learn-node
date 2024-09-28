
'use strict'

if (process.argv.length < 3) return console.error('No numbers found');

let sum = 0;
for (let index = 2; index < process.argv.length; index += 1) {

    const num = Number(process.argv[index]);
    if (isNaN(num)) return console.error('Not a number');
    sum += num;
}

console.log(sum);
