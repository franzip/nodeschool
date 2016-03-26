var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.use(errorHandler());

app.use(function* () {
    if (this.path === '/error') {
        throw new Error('ooops');
    }
    this.body = 'OK';
});

function errorHandler() {
    return function* (next) {
        // try catch all downstream errors here
        try {
            yield next;
        } catch(err) {
            this.status = 500;
            this.body = 'internal server error';
        }
    };
}

app.listen(port);
