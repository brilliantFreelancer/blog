const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');

const config = require('./config/config');
//
const indexRouter = require('./routes');
//
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt secret token
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true,useFindAndModify: false,});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('%s ...mongo connected...', chalk.green('✓'))
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: config.sessionSecret ,saveUninitialized: true,resave: true}));


// app.use('/', indexRouter);
app.use('/', usersRouter);//ToDo add users
app.use('/', blogsRouter);//ToDo add blogs
app.use('/', commentsRouter);//ToDo add comments

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
