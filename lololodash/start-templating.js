var _ = require("lodash");

var worker = function(data) {
    return _.template('Hello <%= name %> (logins: <%= _.size(login) %>)')(data);
};

module.exports = worker;
