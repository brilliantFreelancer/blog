const BlogModel = require('../Models/BlogModel');

module.exports.upVoteBlog = (
    blogId,
    voteAuthor) => {


    return new Promise((resolve, reject) => {

        //ToDo add if exist then go  to  for loop
        //observe to prevent duplicate user vote
        // BlogModel.findOne({_id: blogId}, function (err, result) {
        //     for (let i = 0; i < result.blogPost_Vote.length; i++) {
        //         if (result.blogPost_Vote[i].author === voteAuthor) {
        //             console.log('duplicate')
        //             // callBack(err)
        //         }
        //     }
        // })

        //get blog_id => push new vote array into db
        BlogModel.findByIdAndUpdate(blogId,
            {
                $push: {blogPost_Vote: {author: voteAuthor, date: new Date().getTime(), vote: true}},
                $inc: {blogPost_Vote_Number: 1}
            },
            // {safe: true, upsert: true}, // ??
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
        );
    })

};

