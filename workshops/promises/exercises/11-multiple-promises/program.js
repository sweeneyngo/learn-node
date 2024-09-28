'use strict'

function all(promiseOne, promiseTwo) {

    return new Promise((fulfill, reject) => {

        let counter = 0;
        const values = [];

        promiseOne.then((value) => {
            values.push(value);
            counter += 1

            if (counter >= 2) {
                fulfill(values);
            }
        });

        promiseTwo.then((value) => {
            values.push(value);
            counter += 1

            if (counter >= 2) {
                fulfill(values);
            }
        });

    });
}

all(getPromise1(), getPromise2())
    .then(console.log);
