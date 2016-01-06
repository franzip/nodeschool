var Hapi   = require('hapi'),
    boom   = require('boom'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    ttl: 10,
    encoding: 'base64json',
    domain: 'localhost',
    path: '/'
});

server.route({
    path: '/check-cookie',
    method: 'GET',
    config: {
        handler: function(request, reply) {
            if (request.state.session) {
                reply(JSON.stringify({user: 'hapi'}));
            } else {
                reply(Boom.unauthorized('Missing authentication'));
            }
        }
    }
});

server.route({
    path: '/set-cookie',
    method: 'GET',
    config: {
        handler: function(request, reply) {
            reply('Cookie set').state('session', {key: 'makemehapi'});
        },
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});


server.start(function() {
    console.log('Server running...');
});

