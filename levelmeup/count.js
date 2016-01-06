module.exports = function (db, date, cb) {
    var tweet = 0;
    db.createReadStream({ start: date })
    .on('error', function(err) {
        if (cb) {
            cb(err, null);
        }
    })
    .on('data', function(data) {
        tweet += 1;
    })
    .on('end', function() {
        if (cb) {
            cb(null, tweet);
        }
    });
};

