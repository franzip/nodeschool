module.exports = function(msg, bang = msg.length) {
    return msg.concat('!'.repeat(bang));
};
