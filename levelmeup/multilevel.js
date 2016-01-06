var connection = require('net').connect(4545),
    db         = require('multilevel').client();

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(err, value) {
    if (err) {
        throw err;
    }

    console.log(value);
    connection.end();
});


