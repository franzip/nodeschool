module.exports = function makeCounter(someObj) {
    var value = 0;
    someObj.next = function() {
        return {
            value: ++value,
            done: (value > 10) ? true : false
        };
    };
};
