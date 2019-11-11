const BlogModel = require('../Models/BlogModel');


module.exports.getBlogInCategory = (blogSubscribed) => {

    return new Promise((resolve, reject) => {
        BlogModel.find({"blogSubscribed": blogSubscribed},
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
        })
    })

};
