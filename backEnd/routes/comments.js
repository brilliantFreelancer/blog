const express = require('express');
const router = express.Router();

const CreateCommentController = require('../Controllers/createCommentController');
const UpVoteCommentController= require('../Controllers/upVoteCommentController');
const DownVoteCommentController= require('../Controllers/downVoteCommentController');

//get author's id and post comment
router.post('/createComments/:authorId', function (request, response) {

    //get id of blogger to delete his/her blog
    CreateCommentController .CreateComment(
        request.params.authorId,
        request.body.commentContent,
        request.body.commentPost_id,
        request.body.commentComment_id,
        function (data) {
            response.json({status: true, data: data})
        })
});

//get voter's id and submit up vote
router.post('/upVote_comment/:commentId', function (request, response) {
    UpVoteCommentController.upVoteComment(
        request.params.commentId,
        request.body.voteAuthor,
        function (data) {
            response.json({status: true, data: data})
        })
});

//get voter's id and submit down vote
router.post('/downVote_comment/:commentId', function (request, response) {
    DownVoteCommentController.downVoteComment(
        request.params.commentId,
        request.body.voteAuthor,
        function (data) {
            response.json({status: true, data: data})
        })
});

module.exports = router;
