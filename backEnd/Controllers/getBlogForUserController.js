const BlogModel = require('../Models/BlogModel');


module.exports.getBlogForUser = (authorId) => {

    return new Promise((resolve, reject) => {
        BlogModel.find({"blogAuthor": authorId},
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
        })
    })

};
