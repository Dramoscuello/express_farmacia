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

router.get('/gestionar-alimento', controllers.gestionAlimentoController.getAlimentos);
router.get('/gestionar-alimento/eliminar/:id', controllers.gestionAlimentoController.deleteAlimento);
router.get('/gestionar-aseo', controllers.gestionAseoController.getAseo);
router.get('/gestionar-aseo/eliminar/:id', controllers.gestionAseoController.deleteAseo);
router.get('/gestionar-maquillaje', controllers.gestionMaqController.getMaquillaje);
router.get('/gestionar-maquillaje/eliminar/:id', controllers.gestionMaqController.deleteMaquillaje);
router.get('/gestionar-medicina', controllers.gestionMedicinaController.getMedicina);
router.get('/gestionar-medicina/eliminar/:id', controllers.gestionMedicinaController.deleteMedicina);
router.get('/agregar-producto', controllers.adminProductosController.agregarProducto);
router.post('/agregar-producto', controllers.adminProductosController.agregarProductoPost);

router.get('/gestionar-usuarios', controllers.gestionUsuariosController.getUsuarios);
router.get('/gestionar-usuarios/eliminarUsuario/:id', controllers.gestionUsuariosController.deleteUsuario);

module.exports = router;
