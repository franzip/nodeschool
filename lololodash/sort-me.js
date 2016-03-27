var _ = require("lodash");

var worker = function(items) {
    return _.sortBy(items, function(item) {
        return -item.quantity;
    });
};

module.exports = worker;
