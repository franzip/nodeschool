var koa  = require('koa'),
    app  = koa(),
    port = process.argv[2];

app.use(handler);
app.listen(port);

function* handler() {
    this.body = "hello koa";
}
