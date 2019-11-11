const BlogModel = require('../Models/BlogModel');


module.exports.deleteBlog= (blogId) => {

    return new Promise((resolve, reject) => {
        BlogModel.findByIdAndRemove({"_id": blogId},
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        )
    })
};
