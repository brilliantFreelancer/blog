const CommentBlogModel = require('../Models/commentsModel');
const BlogModel = require('../Models/BlogModel');
//get author id and it's body (content, post_id and comment_id) and save the comment
module.exports.CreateComment = (
    authorId,
    commentContent,
    commentPost_id,
    commentComment_id) => {

    const comment = new CommentBlogModel({
        commentAuthor: authorId,
        commentContent: commentContent,
        commentPost_id: commentPost_id,
        commentComment_id: commentComment_id,
    });

    BlogModel.findByIdAndUpdate(commentPost_id,
        {
            $push: {
                blogComment: {
                    content: commentContent,
                    voteNumber: {type:Number,default: 0},
                    author: authorId,
                    date: new Date().getTime()
                }
            },
            $inc: {blogCommentsNumber: 1}
        },
        function () {
            BlogModel.findOne({_id: commentPost_id}, function (err, result) {
            })
        }
    );

    //

    // CommentsModel.findByIdAndUpdate(commentId,
    //     {
    //         $push: {commentVote: {author: voteAuthor, date: new Date().toISOString(), vote: false}},
    //         $inc: {comment_Vote_Number: -1}
    //     },
    //     // {safe: true, upsert: true}, // ??
    //     function () {
    //         CommentsModel.findOne({_id: commentId}, function (err, result) {
    //             callBack(result)
    //         })
    //     }
    // );

    return new Promise((resolve, reject) => {
        comment.save((err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
