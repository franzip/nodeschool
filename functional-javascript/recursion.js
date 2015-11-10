function reduce(arr, fn, initial) {
    return (function iterate(arr, idx, fn, initial) {
        if (idx === arr.length - 1) {
            return fn(initial, arr[idx], idx, arr);
        }
        return iterate(arr, idx + 1, fn, fn(initial, arr[idx], idx, arr));
    })(arr, 0, fn, initial);
}

module.exports = reduce;
