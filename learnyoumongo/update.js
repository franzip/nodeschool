var mongo  = require('mongodb').MongoClient,
    dbName = process.argv[2];

mongo.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
    db.collection('users').update({
        name: 'Tina'
    }, {
        $set: {
            age: 40
        }
    }, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        db.close();
    });
});



