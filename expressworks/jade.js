var express  = require('express'),
    app      = express(),
    jade     = require('jade'),
    port     = process.argv[2],
    template = process.argv[3];

app.set('view engine', 'jade');
app.set('views', template);
app.get('*', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
});
app.listen(port);
