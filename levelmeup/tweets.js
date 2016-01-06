module.exports = function(db, date, cb) {
    var tweets = [];
    db.createReadStream({ start: date, end: date + '\xff' })
    .on('error', function(err) {
        if (cb) {
            cb(err, null);
        }
    })
    .on('data', function(tweet) {
        tweets.push(tweet.value);
    })
    .on('end', function() {
        if (cb) {
            cb(null, tweets);
        }
    });
};
