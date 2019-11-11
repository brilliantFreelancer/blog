const express = require('express');
const router = express.Router();
const SignUpController = require('../Controllers/SignUpController');
const SignInController = require('../Controllers/SignInController');
const UpVoteAuthorController = require('../Controllers/upVoteAuthorController');
const DownVoteAuthorController = require('../Controllers/downVoteAuthorController');
const ListAuthorsController= require('../Controllers/listAuthorsController');
const jwt = require('jsonwebtoken');

const config = require('../config/config');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');

//POST Sign_Up
router.post('/signUp',
    [
        check('*', 'empty field').not().isEmpty(),
        check('email', 'wrong email format !').isEmail(),
        check('password', 'password length is too short !').isLength({min: 3}),
    ]
    , function (request, response) {

        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            // return response.status(422).json({ errors: errors.array() })
            return response.status(422).json({status: false, error: errors.array()[0].msg})
        }

        SignUpController.signUp(
            request.body.first_name,
            request.body.last_name,
            request.body.location,
            request.body.job,
            request.body.specialization,
            request.body.about,
            request.body.email,
            request.body.password,

            function (data) {
                response.json({status: true, data: data})
            })
    });

//POST Sign_In
router.post('/signIn', function (request, response) {

    SignInController.signIn(request.body.email, request.body.password, function (data) {
        if (bcrypt.compareSync(request.body.password, data.password)) {
            //the last one:{} => for ever? {expiresIn: '365d' // expires in 365 days}
            let dataJwt = {
                rand1: randChar(6),
                email: request.body.email,
                rand2: randChar(6)
            }
            // jwt.sign(dataJwt, config.jwtSecret, { expiresIn: config.jwtExpiresIn },function (token) {
            //     })
            const token = jwt.sign(dataJwt, config.jwtSecret, {expiresIn: config.jwtExpiresIn});
            response.cookie('Auth', token, {expire: config.jwtExpiresIn + Date.now()})
            request.session.user = {
                email: request.body.email
            }

            response.json({status: true, message: "user found!!!", data: {user: data, token: token}});
        }
    })
});

//user up vote
router.post('/upVote_author/:authorId', function (request, response) {
    UpVoteAuthorController.upVoteAuthor(
        request.params.authorId,
        request.body.voteAuthor,
        function (data) {
            response.json({status: true, data: data})
        })
});

//user down vote
router.post('/downVote_author/:authorId', function (request, response) {
    DownVoteAuthorController.downVoteAuthor(
        request.params.authorId,
        request.body.voteAuthor,
        function (data) {
            response.json({status: true, data: data})
        })
});

//list users
router.get('/listAuthors', function (request, response) {
    ListAuthorsController.listAuthors(
        function (data) {
            response.json({status: true, data: data})
        })
});


module.exports = router;

function randChar(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
