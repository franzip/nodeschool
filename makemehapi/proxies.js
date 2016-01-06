var h2o2   = require('h2o2'),
    Hapi   = require('hapi'),
    server = new Hapi.Server();

server.register(h2o2, function (err) {
    if (err) throw err;
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/proxy',
    method: 'GET',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});

server.start(function() {
    console.log('Server running...');
});
