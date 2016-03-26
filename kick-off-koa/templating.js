var koa   = require('koa'),
    views = require('co-views'),
    app   = koa(),
    port  = process.argv[2];

var render = views(__dirname, {
    ext: 'ejs'
});

var user = {
    name: {
        first: 'Tobi',
        last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
};

app.use(function* (next) {
    if (this.path !== '/') {
        return yield next;
    }

    this.body = yield render('user', {user: user});
});

app.listen(port);
