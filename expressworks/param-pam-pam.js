var express = require('express'),
    app     = express(),
    crypto  = require('crypto'),
    port    = process.argv[2];

app.param('id', function(req, res, next, id) {
  res.hash = crypto
             .createHash('sha1')
             .update(new Date().toDateString() + id)
             .digest('hex');
  next();
});

app.put('/message/:id', function(req, res) {
  res.send(res.hash);
});

app.listen(port);
