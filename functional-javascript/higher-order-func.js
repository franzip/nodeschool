function repeat(operation, num) {
    if (!num) return;
    operation()
    return repeat(operation, num - 1);
}

module.exports = repeat
