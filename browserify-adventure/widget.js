var domify = require('domify');

function Widget () {
    if (!(this instanceof Widget)) return new Widget;
    this.widget = domify('<div>Hello <span class="name"></span>!</div>');
}

Widget.prototype.setName = function (name) {
    this.widget.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function (target) {
    target.appendChild(this.widget);
};

module.exports = Widget;
