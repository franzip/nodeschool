module.exports = function(options) {
    this.add({ role: 'math', cmd: 'sum', integer: true }, function(msg, respond) {
        var left = Math.floor(Number(msg.left)),
            right = Math.floor(Number(msg.right));

        respond(null, {answer: left + right });
    });
};
