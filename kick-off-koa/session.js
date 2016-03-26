var koa     = require('koa'),
    session = require('koa-session'),
    app     = koa(),
    port    = process.argv[2];

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* (next) {
    if (this.path !== '/') {
        return yield next;
    }
    var n = this.session.view || 0;
    this.session.view = ++n;
    this.body = n + ' views';
});

app.listen(port);
