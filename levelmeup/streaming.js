var db = require('level')(process.argv[2]);

db.createReadStream().on('data', function(data) {
    console.log(`${data.key}=${data.value}`);
});

db.close();
