module.exports = function(options) {
    this.add({ role: 'math', cmd: 'sum' }, function(msg, respond) {
        respond(null, {answer: Number(msg.left) + Number(msg.right) });
    });

    this.add({ role: 'math', cmd: 'sum', integer: true }, function(msg, respond) {
        var left = Math.floor(Number(msg.left)),
            right = Math.floor(Number(msg.right));

        respond(null, {answer: left + right });
    });
};
