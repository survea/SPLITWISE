const router = require('express').Router();
const dashController = require('../controller/DashboardController');

// to get data on dashboard
router.route('/getData')
.post(dashController.getData);

// to add a new friend
router.route('/addFriend')
.post(dashController.addFriend);

// to add new expenses
router.route('/addExpense')
.post(dashController.addExpense);


module.exports =  router;