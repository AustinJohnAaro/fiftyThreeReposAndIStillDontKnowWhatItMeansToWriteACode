var router = require('express').Router();

var apiRoutes = require('./api/');
var homeRoutes = require('./home-routes.js');
var dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
