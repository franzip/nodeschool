var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.keys = ['secret', 'keys'];

app.use(function* (next) {
    if (this.path !== '/') {
        return yield next;
    }
    var response = this.cookies.get('view', {
        signed: true
    }) || 0;

    this.cookies.set('view', ++response, {
        signed: true
    });

    this.body = response + ' views';
});

app.listen(port);
