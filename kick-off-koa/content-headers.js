var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.use(function* (next) {
    if (this.request.type === 'application/json') {
        this.body = {message: 'hi!'};
    } else {
        this.body = 'ok';
    }
});

app.listen(port);
