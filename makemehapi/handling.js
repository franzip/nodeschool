var Inert  = require('inert'),
    Hapi   = require('hapi'),
    path   = require('path'),
    server = new Hapi.Server();

server.register(Inert, function (err) {
    if (err)  {
        throw err;
    }
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: path.join(__dirname, 'index.html')
    }
});

server.start(function() {
    console.log('Server running...');
});
