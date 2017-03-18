var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);
router.get('/signup', controllers.UserController.getSignUp);
router.post('/signup', controllers.UserController.postSignUp);

module.exports = router;
