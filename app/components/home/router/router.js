routing.$inject = ['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      parent: 'root',
      views: {
        '@': {
          controller: 'homeCtrl',
          controllerAs: 'ctrl',
          templateProvider: ['$q', function ($q) {
            let deferred = $q.defer();
            require.ensure(['../views/home.html'], function () {
              let template = require('../views/home.html');
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
              name: module.default
            });
            deferred.resolve(module);
          });
          return deferred.promise;
        }]
      }
    })
}