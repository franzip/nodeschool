var mongo      = require('mongodb').MongoClient,
    collection = process.argv[3],
    _id        = process.argv[4],
    dbName     = process.argv[2];

mongo.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
    db.collection(collection).remove({
        _id: _id
    }, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        db.close();
    })
});


