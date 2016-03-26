var koa   = require('koa'),
    parse = require('co-body'),
    app   = koa(),
    port  = process.argv[2];

app.use(function* (next) {
    if (this.path !== '/') {
        return yield next;
    }

    var body = yield parse(this);

    this.body = body.name.toUpperCase();
});

app.listen(port);
