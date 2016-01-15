var QHttp   = require('q-io/http'),
    _       = require('lodash'),
    session = 'http://localhost:7000',
    db      = 'http://localhost:7001/';

var dbPath = _.bind(String.prototype.concat, db);

QHttp.read(session)
.then(_.flowRight(QHttp.read, dbPath))
.then(JSON.parse)
.then(console.log, console.error)
.done();


