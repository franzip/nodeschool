module.exports = function *multiplier() {
    var start = 0, multiplier = 1;

    while(true) {
        start++;
        multiplier = yield(start * multiplier);
        if (!multiplier) {
            multiplier = 1;
        }
    }
};
