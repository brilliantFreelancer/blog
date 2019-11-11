//import router from express
const express = require('express');
const router = express.Router();

//import controllers
const createBlogController = require('../Controllers/createBlogController');
const ListBlogsController = require('../Controllers/ListBlogsController');
const GetBlogForUserController = require('../Controllers/getBlogForUserController');
const UpdateBlogController = require('../Controllers/updateBlogController');
const DeleteBlogController = require('../Controllers/deleteBlogController');
const UpVoteBlogController = require('../Controllers/upVoteBlogController');
const DownVoteBlogController = require('../Controllers/downVoteBlogController');
const GetBlogForCategoryController = require('../Controllers/getBlogForCategoryController');
const GetOneBlogForUser = require('../Controllers/getOneBlogForUser');


//create blog
/**
 *
 * param
 * ret
 * fun
 *
 */
router.post('/createBlog/:authorId', (request, response) => {
    createBlogController.createBlog(
        request.params.authorId,
        request.body.blogTitle,
        request.body.blogContent,
        request.body.blogSummery,
        request.body.blogSubscribed,
        request.body.blogTags
    ).then((data)=> {
        response.send(data)
    }, function(err) {
        console.log(err);
    })
});


//list all blogs
router.get('/listBlogs', function (request, response) {
    ListBlogsController.list().then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});


//list blogs of a user by author_id
router.get('/getBlogForUser/:authorId', function (request, response) {
    //get id of blogger to list his/her blogs
    GetBlogForUserController.getBlogForUser(request.params.authorId,
    ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});

//get an specific blog of a user
router.get('/getOneBlogForUser/:blogId', function (request, response) {
    //
    GetOneBlogForUser.getOneBlogForUser(request.params.blogId,
     ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});

//list blogs of specific category (subscribed): get name of category and pass those blogs
router.get('/getBlogForCategory/:blogSubscribed', function (request, response) {
    //get id of blogger to list his/her blogs
    GetBlogForCategoryController .getBlogInCategory(request.params.blogSubscribed,
    ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});

//update a blog by blog_id (params)
router.post('/updateBlog/:blogId', function (request, response) {

    UpdateBlogController.updateBlog(
        request.params.blogId,
        request.body.blogTitle,
        request.body.blogContent,
        request.body.blogSummery,
        request.body.blogSubscribed,
        request.body.blogTags,
    ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});


//delete a blog by blog_id
router.post('/deleteBlog/:blogId', function (request, response) {
    //get id of blogger to delete his/her blog
    DeleteBlogController .deleteBlog(request.params.blogId)
        .then((data) => {
            response.send(data)
        }, (err) => {
            console.log(err);
        })
});

//up vote a blog
router.post('/upVote_Post/:blogId', function (request, response) {

    UpVoteBlogController.upVoteBlog(
        request.params.blogId,
        request.body.voteAuthor,
    ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});

//down vote a blog
router.post('/downVote_Post/:blogId', function (request, response) {

    DownVoteBlogController.downVoteBlog(
        request.params.blogId,
        request.body.voteAuthor,
    ).then((data) => {
        response.send(data)
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;
