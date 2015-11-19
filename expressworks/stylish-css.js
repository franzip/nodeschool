var express = require('express'),
    app     = express(),
    port    = process.argv[2],
    dir     = process.argv[3];

app.use(require('stylus').middleware(dir));

app.use(express.static(dir));

app.listen(port);
