const { Router } = require('express');
const { userController } = require('../controllers/user.controller');

const router = Router();

router.get('/login',userController.loginView);
router.get('/registro',userController.registerView);
router.get('/reset-password',userController.forgotPasswordView);

module.exports = router;