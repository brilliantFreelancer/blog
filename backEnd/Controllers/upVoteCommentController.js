const CommentsModel = require('../Models/commentsModel');

module.exports.upVoteComment = function (
    commentId,
    voteAuthor) {

    return new Promise((resolve, reject) => {
        //get comment_id => push new vote array into db
        CommentsModel.findByIdAndUpdate(commentId,
            {
                $push: {commentVote: {author: voteAuthor, date: new Date().getTime(), vote: true}},
                $inc: {comment_Vote_Number: 1}
            },
            // {safe: true, upsert: true}, // ??
            function () {
                CommentsModel.findOne({_id: commentId},
                    (err, result) => {
                        if (err) {
                            console.log("err2");
                            reject(err);
                        } else {
                            resolve(result);
                        }
                })
            }
        );
    })

};
