function countWords(inputWords) {
    return inputWords.reduce(function(map, current) {
        map[current] = map[current] + 1 || 1;
        return map;
    }, {});
}

module.exports = countWords
