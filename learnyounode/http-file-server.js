var http = require("http"),
    fs   = require("fs"),
    port = process.argv[2],
    path = process.argv[3];

var server = http.createServer(function(req, res) {
    var src = fs.createReadStream(path);
    res.writeHead(200, {'content-type': 'text/plain'});
    src.pipe(res);
});

server.listen(port);
