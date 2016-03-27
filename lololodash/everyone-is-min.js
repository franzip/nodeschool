var _ = require("lodash");

var worker = function(cityTemps) {
    var result = {hot: [], warm: []};
    _.forEach(cityTemps, function(cityTemp, city) {
        if (_.every(cityTemp, function(temp) {
            return temp > 19;
        })) {
            result.hot.push(city);
        } else if (_.some(cityTemp, function(temp) {
            return temp > 19;
        })) {
            result.warm.push(city);
        }
    });

    return result;
};

module.exports = worker;
