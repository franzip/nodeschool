module.exports = function filterForNumbers(iterable) {
    var result = [];
    for (var value of iterable) {
        if (Number.isInteger(value)) {
            result.push(value);
        }
    }
    return result;
};
