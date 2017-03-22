var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);
router.get('/signup', controllers.UserController.getSignUp);
router.post('/signup', controllers.UserController.postSignUp);
router.get('/signin', controllers.UserController.getSignIn);
router.post('/signin',  passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/signin',
	failureFlash : true
}));
router.get('/logout', controllers.UserController.logout);


router.get('/medicamentos', controllers.medicamentosController.getMedicamentos);

router.get('/alimento-y-bebidas', controllers.alimentoController.getAlimento);
router.get('/aseo-y-hogar', controllers.hogarController.getHogar);
router.get('/maquillaje-y-accesorios', controllers.accesoriosController.getAccesorios);

module.exports = router;
