var QHttp  = require('q-io/http'),
    target = 'http://localhost:1337';

QHttp.read(target)
.then(JSON.parse)
.then(console.log, console.error)
.done();
