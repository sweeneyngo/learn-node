'use strict'

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(user => goodUsers.some(targetUser => targetUser === user))
    };
}

module.exports = checkUsersValid;
