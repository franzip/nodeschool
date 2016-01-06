var Hapi   = require('hapi'),
    Vision = require('vision'),
    path   = require('path'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, function (err) {
    if (err) throw err;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'templates'),
    helpersPath: path.join(__dirname, 'helpers')
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        view: 'helper.html',
    }
});

server.start(function() {
    console.log('Server running...');
});
