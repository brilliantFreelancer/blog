const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createBlogSchema = new Schema({
    //blogAuthor & author is id
    blogAuthor: {type: Schema.Types.ObjectId,ref:'User'},
    // blogComments: {type: Schema.Types.ObjectId,ref:'Comment'},
    blogTitle: {type:String},
    blogContent: {type:String},
    blogDate: {},
    blogSummery: {type:String},
    blogComment: [],
    blogSubscribed: {type:String},
    // blogPost_Vote: [{author:String,date:Date,vote:Boolean}],//temporary (i think below property is good enough)
    blogPost_Vote: [],
    blogCommentsNumber:{type:Number,default: 0},
    blogTags:{firsTag:String,secondTag:String,thirdTag:String},
    blogPost_Vote_Number: {type:Number,default: 0},
}, {timestamps: true});

module.exports = mongoose.model('Blog', createBlogSchema);//first argument is real name of collection in mongoDB
