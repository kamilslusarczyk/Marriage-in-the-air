var jwt = require('jsonwebtoken');

Verify = function(token, nextFn, res) {
    jwt.verify(token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: "NOT PERMITTED",
                error: err
            });

            nextFn();
        }
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