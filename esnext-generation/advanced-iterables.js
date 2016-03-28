module.exports = function generate(isEven) {
    var value = (isEven) ? 0 : -1;
    return {
        next: function(swap) {
            value += (swap) ? 1 : 2;
            return {value: value};
        }
    };
};
