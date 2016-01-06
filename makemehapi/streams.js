var Hapi   = require('hapi'),
    path   = require('path'),
    fs     = require('fs'),
    Rot13  = require('rot13-transform'),
    path   = require('path'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        var text = fs.createReadStream(path.join(__dirname, 'input.txt'));
        reply(text.pipe(Rot13()));
    }
});

server.start(function() {
    console.log('Server running...');
});

