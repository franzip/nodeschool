var express = require('express'),
    app     = express(),
    port    = process.argv[2];

app.get('/search', function(req, res) {
  res.json(req.query);
});

app.listen(port);
