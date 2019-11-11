const BlogModel = require('../Models/BlogModel');


module.exports.getOneBlogForUser = (blogId) => {

    return new Promise((resolve, reject) => {
        BlogModel.findOne({"_id": blogId}).populate({
            path: 'blogAuthor',
            select: 'first_name'
        }).exec((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })

};
