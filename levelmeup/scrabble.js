module.exports = {
    init: function(db, words, cb) {
        var ops = words.map(function(word) {
            return {
                type: 'put',
                key: `${word.length}!${word}`,
                value: word
            };
        })

        db.batch(ops, cb);
    },
    query: function(db, word, cb) {
        var results = [],
            query = word.length + '!' + word.replace(/\*/g, '');
        db.createReadStream({ start: query, end: query + '\xff'})
        .on('error', function(err) {
            if (cb) {
                return cb(err, null);
            }
        })
        .on('data', function(data) {
            results.push(data.value);
        })
        .on('end', function() {
            if (cb) {
                cb(null, results);
            }
        });
    }
};
