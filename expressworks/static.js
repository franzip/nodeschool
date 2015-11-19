var express = require('express'),
    app     = express(),
    port    = process.argv[2],
    html    = process.argv[3];

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(port);
