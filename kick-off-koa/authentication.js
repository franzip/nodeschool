var koa     = require('koa'),
    parse   = require('co-body'),
    session = require('koa-session'),
    app     = koa(),
    port    = process.argv[2];

var form = '<form action="/login" method="POST">\
                <input name="username" type="text" value="username">\
                <input name="password" type="password" placeholder="The password is \'password\'">\
                <button type="submit">Submit</button>\
            </form>';

app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
* If `this.session.authenticated` exist, user will see 'hello world'
* otherwise, people will get a `401` error  because they aren't logged in
*/

app.use(function* home(next) {
    if (this.request.path !== '/') {
        return yield next;
    }

    if (this.session.authenticated) {
        this.body = 'hello world';
    } else {
        return this.status = 401;
    }
});

/**
* If successful, the logged in user should be redirected to `/`.
* hint: use `this.redirect`
*/

app.use(function* login(next) {
    if (this.request.path !== '/login') {
        return yield next;
    }

    if (this.request.method === 'GET') {
        if (!this.session.authenticated) {
            return this.body = form;
        } else {
            this.redirect('/');
        }
    } else if (this.request.method === 'POST') {
        var body = yield parse(this);
        if (body.username === 'username' && body.password === 'password') {
            this.session.authenticated = true;
            this.redirect('/');
        } else {
            return this.status = 400;
        }
    }
});

/**
* Let's redirect to `/login` after every response.
* If a user hits `/logout` when they're already logged out,
* let's not consider that an error and rather a "success".
*/

app.use(function* logout(next) {
    if (this.request.path !== '/logout') {
        return yield next;
    }
    this.session.authenticated = false;
    this.redirect('/login');
});

app.listen(port);


