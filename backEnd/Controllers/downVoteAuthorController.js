const UserModel = require('../Models/userModel');

module.exports.downVoteAuthor = (
    authorId,
    voteAuthor) => {

    return new Promise((resolve, reject) => {
        //get blog_id => push new vote array into db
        UserModel.findByIdAndUpdate(authorId,
            {
                $push: {authorVote: {author: voteAuthor, date: new Date().getTime(), vote: false}},
                $inc: {authorPost_Vote_Number: -1}
            },
            // {safe: true, upsert: true}, // ??
            function () {
                UserModel.findOne({_id: authorId},
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
