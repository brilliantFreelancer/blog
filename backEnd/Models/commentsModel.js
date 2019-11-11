const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createCommentschema = new Schema({
    //commentAuthor & author is authors's id
    commentAuthor: String,
    commentContent: String,
    commentDate: {type : Date, default: Date.now},
    // commentVote: [{author:String,date:{type : Date, default: Date.now},vote:Boolean}],
    commentVote:[],
    comment_Vote_Number: Number,
    commentPost_id: String,
    commentComment_id: String,
}, {timestamps: true});



module.exports = mongoose.model('Comment', createCommentschema);
