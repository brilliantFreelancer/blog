const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports.verify = function (req, res, next) {
    console.log(req.cookies['Auth'])
    if(req.cookies['Auth']){
        jwt.verify(req.cookies['Auth'], config.jwtSecret, function(err, decoded) {
            if(err){
                /// Todo: err res
            } else {
                next()
            }
            // console.log(decoded) // bar
        });
    } else {
        /// Todo: err res
    }

}
