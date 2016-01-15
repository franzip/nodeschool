var QHttp   = require('q-io/http'),
    session = 'http://localhost:7000',
    db      = 'http://localhost:7001';

QHttp.read(session)
.then(function(res) {
    return QHttp.read(db + '/' + res);
}, console.error)
.then(JSON.parse, console.error)
.then(console.log, console.error)
.done();
