var koa  = require('koa'),
    app  = koa(),
    fs   = require('fs'),
    port = process.argv[2],
    path = process.argv[3];

app.use(function* (next) {
    switch(this.path) {
        case '/json':
            this.body = {foo: 'bar'};
            break;
        case '/stream':
            this.body = fs.createReadStream(path);
            break;
        default:
            return yield next;
    }
});

app.listen(port);
