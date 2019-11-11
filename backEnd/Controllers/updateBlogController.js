const BlogModel = require('../Models/BlogModel');

module.exports.updateBlog = (
    blogId,
    blogTitle,
    blogContent,
    blogSummery,
    blogSubscribed,
    blogTags) => {

    return new Promise((resolve, reject) => {
        BlogModel.findByIdAndUpdate(blogId, {
                "blogTitle": blogTitle,
                "blogContent": blogContent,
                "blogSummery": blogSummery,
                "blogSubscribed": blogSubscribed,
                "blogTags": blogTags,
            },
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
    })
};
