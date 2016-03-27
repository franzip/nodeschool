var _ = require("lodash");

var worker = function(freelancers) {
    var average = _.reduce(freelancers, function(result, freelancer) {
        return result + freelancer.income;
    }, 0) / _.size(freelancers);
    return {
        average: average,
        underperform: _.sortBy(_.filter(freelancers, function(freelancer) {
            return freelancer.income <= average;
        }), function(o) { return o.income; }),
        overperform: _.sortBy(_.filter(freelancers, function(freelancer) {
            return freelancer.income > average;
        }), function(o) { return o.income; })
    };
};

module.exports = worker;
