const router = require('express').Router();
const userController = require('../controller/UserController');
const emailController = require('../controller/EmailController')

// to get all users
router.route('/getUser')
.get(userController.getUser);

// to register new user
router.route('/signup')
.post(userController.signIn);

// to update user
router.route('/updateUser/:id')
.post(userController.updateUser);

// to login user
router.route('/login')
.post(userController.login);

// to the email verification 
router.route('/email')
.post(emailController.collectEmail);

// to confirm if the email is confirmed
router.route('/email/confirm/:id').get(emailController.confirmEmail);

module.exports =  router;