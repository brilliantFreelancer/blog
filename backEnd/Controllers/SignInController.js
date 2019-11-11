const UserModel = require('../Models/userModel');

module.exports.signIn = function (email, password) {
    UserModel.findOne({email: email},
        (err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
    })
};
