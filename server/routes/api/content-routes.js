const router = require('express').Router();
const {
  saveContent,
} = require('../../controller/content-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/saveContent').put(saveContent);

module.exports = router;
