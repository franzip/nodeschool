var q           = require('q'),
    invalidJSON = process.argv[2];

q.fcall(JSON.parse, invalidJSON)
.then(null, console.log);
