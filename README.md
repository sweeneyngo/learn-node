# learn-node

Solutions for exercises from selected workshops in Node.
Self-paced, focus on clarity over efficiency.

Targeted a select few based on what I wanted to learn. May do more workshops in the distant future.
- node: [learnyounode](https://github.com/workshopper/learnyounode)
- promises: [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)
- functional: [functional-javascript-workshop](https://github.com/timoxley/functional-javascript-workshop)

> Note: For promises, use Node's Argon (LTS v4.9.1). I recommend `nvm use v4.9.1`.

## What is Node?
A simple I/O platform to write JavaScript.
Many things constitute as I/O, such as:
- Reading/writing files
- Pushing notifications
- Managing an API
- Managing a Database
- Caching
- Resource buckets

It is **async**, or non-blocking.
It supports callbacks, events, streams, and modules.

Callbacks are the core essence that powers asynchronicity. Typically, async/await is used in tandem.

Events act as pub/sub, and we connect callbacks to each. Events are many-to-many, so the same event can trigger multiple callbacks, and there can exist multiple events.

```javascript
// For example,
client.on('eventOne', callbackOne);
client.on('eventOne', callbackTwo);
client.on('eventTwo', callbackThree);
```

[Streams](https://nodejs.org/docs/latest/api/stream.html) work exactly like in UNIX, using backpressure to throttle flow. In ohter words, it minimizes buffering data to chunks. It's also a countermeasure to [callback hell](http://callbackhell.com/).

```javascript
const http = require('http');
const fs = require('fs');

// Without streams,
const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/data.txt', (err, data) => {
        res.end(data);
    });
});

// With streams,
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
});

server.listen(8000);
```

Modules have a similar philosophy to streams. They allow for separation of concerns with code. With Node, it opts for local package management similar to Python's virtual environment by default.

## Sources
Resources for learning + building with Node.
- [art-of-node](https://github.com/max-mapper/art-of-node?tab=readme-ov-file) for an introduction to Node.
- [NodeSchool](https://nodeschool.io/) for a list of active workshops.
