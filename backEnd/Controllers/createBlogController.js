const BlogModel = require('../Models/BlogModel');
//get
module.exports.createBlog =  (
    blogAuthor,
    blogTitle,
    blogContent,
    blogSummery,
    blogSubscribed,
    blogTags) => {

    const blog = new BlogModel({
        blogAuthor: blogAuthor,
        blogTitle: blogTitle,
        blogContent: blogContent,
        blogSummery:blogSummery,
        blogSubscribed:blogSubscribed,
        blogTags:blogTags,
        blogDate: new Date().getTime()
    });

    return new Promise((resolve, reject) => {
        blog.save((err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

};
