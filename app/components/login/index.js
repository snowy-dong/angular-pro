import loginCtrl from './controller/loginController'
module.exports = angular.module('login', [])
  .controller('loginCtrl', loginCtrl)
  .name;