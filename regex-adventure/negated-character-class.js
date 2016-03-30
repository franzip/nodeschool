module.exports = function(str) {
    return /[^\d][^A-Z]/.test(str);
};
