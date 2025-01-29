const { request, response } = require('express');

const loginView = (req = request, res = response) => {
  return res.render('auth/login',{
    page: 'Iniciar sesión'
  });
}

const registerView = (req = request, res = response) => {
  return res.render('auth/register',{
    page: 'Crear cuenta'
  });
}

const forgotPasswordView = (req = request, res = response) => {
  return res.render('auth/forgot-password',{
    page: 'Recupera tu acceso'
  });
}

const userController = {
  loginView,
  registerView,
  forgotPasswordView
}

module.exports = { userController };