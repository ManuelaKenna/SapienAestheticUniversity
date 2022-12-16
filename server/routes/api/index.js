const router = require('express').Router();
const adminRoutes = require('./admin-routes');
const creatorRoutes = require('./creator-routes');
const userRoutes = require('./user-routes');

router.use('/admin', adminRoutes);
router.use('/creator', creatorRoutes);
router.use('/user', userRoutes);

module.exports = router;
