var express    = require('express'),
    bodyparser = require('body-parser'),
    app        = express(),
    port       = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.use('/form', function(req, res, next) {
  res.reversed = req.body.str.split('').reverse().join('');
  next();
});

app.post('/form', function(req, res) {
  res.send(res.reversed);
});

app.listen(port);


