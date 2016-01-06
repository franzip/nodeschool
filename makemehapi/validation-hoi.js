var Hapi   = require('hapi'),
    Joi    = require('joi'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/login',
    method: 'POST',
    handler: function(request, reply) {
        reply('login successful')
    },
    config: {
        validate: {
           payload: Joi.object({
               username: Joi.string()
                         .when('isGuest', {
                             is: false, then: Joi.required()
                         }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                isGuest: Joi.boolean().required()
           })
           .options({allowUnknown: true})
           .without('password', 'accessToken')
        }
    }
});

server.start(function() {
    console.log('Server running...');
});

