var port    = 9999,
    http    = require('http'),
    jstrace = require('jstrace');

var server = http.createServer(function(req, res) {
    var status,
        body;

    res.setHeader('content-type', 'application/json');
    jstrace('request:start', { 'url': req.url });

    if (req.method === 'GET' && req.url === '/prognosis') {
        status = 200,
        body   = {"ok": true};
    } else {
        status = 404,
        body   = {"error": "notfound"};
    }

    res.writeHead(status);
    res.end(JSON.stringify(body));
    jstrace('request:end', { 'statusCode': status, 'body': body });
});

server.listen(port, function() {
    console.error('up');
});
