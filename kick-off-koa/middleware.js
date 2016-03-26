var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
    this.body = 'hello koa';
});

function responseTime() {
    return function* (next) {
        // record start time
        var start = Date.now();
        yield next;
        // set X-Response-Time head
        this.set('X-Response-Time', Date.now() - start);
    };
}

function upperCase() {
    return function* (next) {
        // do nothing
        yield next;
        // convert this.body to upper case
        this.body = this.body.toUpperCase();
    };
}

app.listen(port);
