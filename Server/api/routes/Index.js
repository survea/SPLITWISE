const router = require('express').Router();
const userRoute = require('./UserRoutes');
const dashRoute = require('./DashboardRoutes');

// route to '/'
router.use('/', userRoute);
// route to dashboard
router.use('/dashboard', dashRoute);
module.exports = router;