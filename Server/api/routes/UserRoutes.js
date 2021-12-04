const router = require('express').Router();
const userController = require('../controller/UserController');

// to get all users
router.route('/getUser')
.get(userController.getUser);

// to register new user
router.route('/signup')
.post(userController.signIn);

// to login user
router.route('/login')
.post(userController.login);

module.exports =  router;