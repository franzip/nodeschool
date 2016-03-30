var mongo     = require('mongodb').MongoClient,
    firstName = process.argv[2],
    lastName  = process.argv[3],
    doc       = {
        firstName: firstName,
        lastName: lastName
    };

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    db.collection('docs').insert(doc, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(doc));
        db.close();
    });
});


