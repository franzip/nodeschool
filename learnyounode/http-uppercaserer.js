var http = require("http"),
    map  = require("through2-map"),
    port = process.argv[2];

function requestUpperer(req, res) {
   if (req.method == "POST") {
        res.writeHead(200, {'content-type': 'text/plain'});
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        res.writeHead(405, {'content-type': 'text/plain'});
    }
}

var server = http.createServer(requestUpperer);

server.listen(port);
