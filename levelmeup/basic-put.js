var path      = process.argv[2],
    db        = require('level')(path),
    parsedObj = JSON.parse(process.argv[3]);

function addEntry(key, val) {
    db.put(key, val, function(err) {
        if (err) {
            return console.error('Error in put():', err);
        }
        console.error(`put ${key} = ${val}`);
    });
}

for (var prop in parsedObj) {
    if (parsedObj.hasOwnProperty(prop)) {
        addEntry(prop, parsedObj[prop]);
    }
}

db.close();
