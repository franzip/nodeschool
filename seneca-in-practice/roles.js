module.exports = function(options) {
    this.add({ role: 'math', cmd: 'product' }, function(args, done) {
        done(null, { answer: Number(args.left) * Number(args.right)});
    });
};
