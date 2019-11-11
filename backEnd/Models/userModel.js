const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;


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


// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});


module.exports = mongoose.model('User', UserSchema );
