var _ = require("lodash");

var worker = function(records) {
    return _.chain(records)
    .groupBy('article')
    .map(function(records, articleNum) {
        return {
            article: Number(articleNum),
            total_orders: _.reduce(records, function(result, obj) {
                return result + obj.quantity;
            }, 0)
        };
    })
    .sortBy(function(o) {
        return -o.quantity;
    })
    .value();
};

module.exports = worker;
