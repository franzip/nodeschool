var marked = require('marked');

module.exports = function(str) {
    return marked(str).replace(/(?:@@)(.*?)(?:@@)/g, '<blink>$1</blink>');
};
