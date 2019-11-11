const UserModel = require('../Models/userModel');

module.exports.listAuthors = () => {

    return new Promise((resolve, reject) => {
        UserModel.find({},
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
        })
    })

};
