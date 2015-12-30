function reduce(arr, fn, initial) {
    function iter(acc, idx, arr) {
        if (idx === arr.length) {
            return acc;
        }
        return iter(fn(initial, arr[idx], idx + 1, arr), idx + 1, arr);
    }
    return iter(initial, 0, arr);
}

module.exports = reduce;
