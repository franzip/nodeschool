var express  = require('express'),
    app      = express(),
    fs       = require('fs'),
    port     = process.argv[2],
    filePath = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(filePath, function(err, data) {
    res.send(JSON.parse(data.toString()));
  });
});

app.listen(port);
