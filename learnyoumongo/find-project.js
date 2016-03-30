var mongo = require('mongodb').MongoClient,
    age   = parseInt(process.argv[2], 10);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    db.collection('parrots').find({age: {$gt: age}}, {_id: 0, name: 1, age: 1}).toArray(function(err, docs) {
        if (err) {
            throw err;
        }
        console.log(docs);
        db.close();
    });
});


