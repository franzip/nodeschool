function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submitted) {
            return goodUsers.some(function(good) {
                return good.id === submitted.id;
            });
        })
    };
}

module.exports = checkUsersValid
