var Hapi   = require('hapi'),
    Auth   = require('hapi-auth-basic'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var user = { name: 'hapi', password: 'auth' };

var validate = function (request, username, password, callback) {
    var isValid = username === user.name && password === user.password;

    return callback(null, isValid, { name: user.name });
};

server.register(Auth, function (err) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'simple',
            handler: function (request, reply) {
                reply();
            }
        }
    });
});

server.start(function() {
    console.log('Server running...');
});

