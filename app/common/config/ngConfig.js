import ngRouter from './router'
export default angular.module('ngConfig',[ngRouter])
.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('ngInterceptor');
  }])
  .name