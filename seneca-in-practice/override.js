module.exports = function(options) {
    this.add({ role: 'math', cmd: 'sum' }, function(msg, respond) {
        respond(null, {answer: Number(msg.left) + Number(msg.right) });
    });

    this.add({ role: 'math', cmd: 'sum' }, function(msg, respond) {
        if (!Number.isFinite(msg.left) || !Number.isFinite(msg.right)) {
            return respond(new Error('Expected left and right to be numbers.'));
        }

        this.prior({
            role: 'math',
            cmd: 'sum',
            left: msg.left,
            right: msg.left
        }, function(err, result) {
            if (err) return respond(err);
            respond(null, { answer: result.answer });
        });
    });
};
