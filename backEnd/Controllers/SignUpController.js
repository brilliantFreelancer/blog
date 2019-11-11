const UserModel = require('../Models/userModel');

module.exports.signUp = function (
    first_name,
    last_name,
    location,
    job,
    specialization,
    about,
    email,
    password) {

    const myData = new UserModel({
        first_name: first_name,
        last_name: last_name,
        location: location,
        job: job,
        specialization: specialization,
        about: about,
        email: email,
        password: password,
    });

    return new Promise((resolve, reject) => {
        myData.save((err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

};
