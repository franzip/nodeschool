var Hapi   = require('hapi'),
    Joi    = require('joi'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    config: {
        handler: function(request, reply) {
            reply(`Chicken: ${request.params.breed}`);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start(function() {
    console.log('Server running...');
});

