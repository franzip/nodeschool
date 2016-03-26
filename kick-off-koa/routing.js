var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.use(function* (next) {
    switch(this.path) {
        case '/':
            this.body = 'hello koa';
            break;
        case '/404':
            this.body = 'page not found';
            break;
        case '/500':
            this.body = 'internal server error';
            break;
        default:
            return yield next;
            break;
    }
});

app.listen(port);
