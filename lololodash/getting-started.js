var _ = require("lodash");

var worker = function(users) {
    return _.filter(users, { active: true });
};

module.exports = worker;
