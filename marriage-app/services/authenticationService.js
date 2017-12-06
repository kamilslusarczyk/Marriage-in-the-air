var jwt = require('jsonwebtoken');

Verify = function (token, nextFn, res) {
    return jwt.verify(token, 'secret', function (err, decoded) {
        if (err) {
            return false;
        }
        return true;
    });
}

var AuthenticationHelper = {
    Authenticate: function (token, nextFn, res) {
        return Verify(token, nextFn, res)
    }
}

module.exports = {
    AuthenticationHelper: AuthenticationHelper
}