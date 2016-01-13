var fs = require('fs');
var domify = require('domify');
var insertCss = require('insert-css');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var html = fs.readFileSync(__dirname + '/widget.html', 'utf-8');
var css = fs.readFileSync(__dirname + '/widget.css', 'utf-8');

insertCss(css);

module.exports = Widget;
inherits(Widget, EventEmitter);

function Widget() {
    var self = this;
    if (!(this instanceof Widget)) return new Widget;
    this.widget = domify(html);

    this.widget.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var message = self.widget.querySelector('textarea[name="msg"]').value;
        self.emit('message', message);
    });
}

Widget.prototype.appendTo = function(target) {
    target.appendChild(this.widget);
};
