routing.$inject = ['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('root', {
      views: {
        'sidebar@': {
          templateProvider: ['$q', function ($q) {
            let deferred = $q.defer();
            require.ensure(['../layout/sidebar.html'], function () {
              let template = require('../layout/sidebar.html');
              deferred.resolve(template);
            });
            return deferred.promise;
          }]
        },
        'header@': {
          templateProvider: ['$q', function ($q) {
            let deferred = $q.defer();
            require.ensure(['../layout/header.html'], function () {
              let template = require('../layout/header.html');
              deferred.resolve(template);
            });
            return deferred.promise;
          }]
        }
      }
    })
}