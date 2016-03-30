var mongo = require('mongodb').MongoClient,
    size  = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
    db.collection('prices').aggregate([
        {
            $match: { size: size }
        },
        {
            $group: {
                _id: 'total',
                total: {
                    $avg: '$price'
                }
            }
        }
    ]).toArray(function(err, result) {
        if (err) {
            throw err;
        }
        console.log(Number(result[0].total).toFixed(2));
        db.close();
    });
});


