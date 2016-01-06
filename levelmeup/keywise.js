var db       = require('level')(process.argv[2], { valueEncoding: 'json' }),
    jsonData = require(process.argv[3]),
    ops;

ops = jsonData.map(function(line) {
    var key;
    if (line.type === 'user') {
        key = line.name;
    } else if (line.type === 'repo') {
        key = `${line.user}!${line.name}`;
    }
    return {
        type: 'put',
        key: key,
        value: line
    };
});

db.batch(ops);

db.close();
