const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chalk = require('chalk');


const blogs = require( './blogs.json' )
const comments = require( './comments.json' )
const users = require( './users.json' )



mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('%s ...MongoDB connected...', chalk.green('✓'))
});

//blogModel
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

const blogModel=module.exports = mongoose.model('Blog', createBlogSchema);

//commentModel
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

const commentModel=module.exports = mongoose.model('Comment', createCommentschema);


//userModel
const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    location: {lat:String,long:String}, //string or number?? //ToDo
    following: [{author:String,date:{type : Date, default: Date.now}}],//frontEnd:"following": {"author":"asd54"}
    // authorVote: [{author:String,date:{type : Date, default: Date.now},vote:Boolean}],//frontEnd:"authorVote": {"author":"asd5s4","vote":false},
    authorVote:[],
    authorPost_Vote_Number: Number,
    job: String,
    specialization: String,
    about: String,
    email: String,
    password: String
}, {timestamps: true});

const userModel=module.exports = mongoose.model('User', UserSchema );

setTimeout(function () {
    run()
},2000)


function run() {

    // console.log(blogs.length);
    // console.log(comments.length);
    // console.log(users.length);
    // Model.save()
    for( let i = 0; i < blogs.length; i++ ) {
        new blogModel({
            _id :  blogs[i]._id.$oid,
            blogAuthor: blogs[i].blogAuthor.$oid,
            blogTitle: blogs[i].blogTitle,
            blogContent: blogs[i].blogContent,
            blogDate: blogs[i].blogDate,
            blogSummery: blogs[i].blogSummery,
            blogComment: blogs[i].blogComment,
            blogSubscribed: blogs[i].blogSubscribed,
            blogPost_Vote: blogs[i].blogPost_Vote,
            blogCommentsNumber: blogs[i].blogCommentsNumber,
            blogTags: blogs[i].blogTags,
            blogPost_Vote_Number: blogs[i].blogPost_Vote_Number,
        }).save(function (err, doc) {
            if (err) return console.log(err);
            if(i+1===blogs.length)console.log("%s All blogs imported." ,chalk.green('✓'));
        })
    }


    for( let i = 0; i < comments.length; i++ ) {
        new commentModel({
            _id :  comments[i]._id.$oid,
            commentAuthor: comments[i].commentAuthor,
            commentContent: comments[i].commentContent,
            commentDate: comments[i].commentDate.$date,
            commentVote: comments[i].commentVote,
            comment_Vote_Number: comments[i].comment_Vote_Number,
            commentPost_id: comments[i].commentPost_id,
            commentComment_id: comments[i].commentComment_id,
        }).save(function (err, doc) {
            if (err) return console.log(err);
            if(i+1===comments.length)console.log("%s All comments imported." ,chalk.green('✓'));
        })
    }

    for( let i = 0; i < users.length; i++ ) {
        new userModel({
            _id :  users[i]._id.$oid,
            first_name: users[i].first_name,
            last_name: users[i].last_name,
            location: users[i].location,
            following: users[i].following,
            authorVote: users[i].authorVote,
            authorPost_Vote_Number: users[i].authorPost_Vote_Number,
            job: users[i].job,
            specialization: users[i].specialization,
            about: users[i].about,
            email: users[i].email,
            password: users[i].password,
        }).save(function (err, doc) {
            if (err) return console.log(err);
            if(i+1===users.length) console.log("%s All users imported." ,chalk.green('✓'));
        })
    }

}

module.exports = 'Hello world';
