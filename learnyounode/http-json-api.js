var http = require("http"),
    url  = require("url"),
    port = process.argv[2];

function parseURL(path) {
    var endpoint = url.parse(path, true).pathname,
        re       = /api\/(parsetime|unixtime)/;
    return endpoint.match(re);
}

function makeJSON(endpoint, iso) {
    var date = new Date(iso),
        res  = {};
    switch (endpoint) {
        case "parsetime":
            res["hour"]   = date.getHours();
            res["minute"] = date.getMinutes();
            res["second"] = date.getSeconds();
            break;
        case "unixtime":
            res["unixtime"] = date.getTime();
            break;
        default:
            break;
    }
    return JSON.stringify(res);
}

function APIListener(req, res) {
    var parsedUrl = parseURL(req.url),
        method    = req.method;
    if (method == "GET" && parsedUrl) {
        var endpoint = parsedUrl[1],
            format   = url.parse(req.url, true).query["iso"];
        res.writeHead(200, {"content-type": "application/json"});
        res.write(makeJSON(endpoint, format));
        res.end();
    }
    res.writeHead(405, {"content-type": "text/plain"});
}

var server = http.createServer(APIListener);

server.listen(port);
