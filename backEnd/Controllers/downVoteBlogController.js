const BlogModel = require('../Models/BlogModel');

module.exports.downVoteBlog = function (
    blogId,
    voteAuthor) {

    return new Promise((resolve, reject) => {
        BlogModel.findByIdAndUpdate(blogId,
            {blogPost_Vote: [{author: voteAuthor, vote: false}], $inc: {blogPost_Vote_Number: -1}}
            ,
            () => {
                BlogModel.findOne({_id: blogId},
                    (err, result) => {
                        if (err) {
                            console.log("err2");
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    }
                )
            }
        )
    })

};
