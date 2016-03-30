var mongo = require('mongodb').MongoClient,
    age   = parseInt(process.argv[2], 10);

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
    db.collection('parrots').count({
        age: {$gt: age}
    }, function(err, count) {
        if (err) {
            throw err;
        }
        console.log(count);
        db.close();
    });
});

