routing.$inject = ['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        '@': {
          controller: 'loginCtrl',
          controllerAs: 'ctrl',
          templateProvider: ['$q', function ($q) {
            let deferred = $q.defer();
            require.ensure(['../views/login.html'], function () {
              let template = require('../views/login.html');
              deferred.resolve(template);
            });
            return deferred.promise;
          }]
        }
      },
      resolve: {
        foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          let deferred = $q.defer();
          require.ensure([], function () {
            let module = require('../index')
            $ocLazyLoad.load({
              name: module
            });
            deferred.resolve(module);
          });
          return deferred.promise;
        }]
      }
    })
}