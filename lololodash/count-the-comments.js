var _ = require("lodash");

var worker = function(comments) {
    return _.chain(comments)
    .groupBy('username')
    .map(function(comments, name) {
        return {
            username: name,
            comment_count: _.size(comments)
        };
    })
    .sortBy(function(obj) {
        return -obj.comment_count;
    });
};

module.exports = worker;
