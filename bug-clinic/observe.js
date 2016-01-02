module.exports = scenario;

var replify = require("replify");

function scenario(callback) {
    var createServer = require("http").createServer,
        port         = 8080,
        server       = createServer();

    server.__message = "REPLs are neat";
    var repl = replify({name : "bug-clinic"}, server);

    server.listen(port, function() {
        callback(server, repl);
    });
}
