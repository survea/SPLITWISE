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

// to settle up
router.route('/settle')
.post(dashController.settle);

// to delete the expenses
router.route('/deleteExpense')
.post(dashController.deleteExpense);

module.exports =  router;