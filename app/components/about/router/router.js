routing.$inject = ['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider) {
  $stateProvider.state('about', {
    url: '/about',
    parent: 'root',
    data: {
      requiresAuth: true
    },
    views: {
      '@': {
        controller: 'aboutCtrl',
        controllerAs: 'ctrl',
        templateProvider: ['$q', function ($q) {
          let deferred = $q.defer();
          require.ensure(['../views/about.html'], function () {
            let template = require('../views/about.html');
            deferred.resolve(template);
          }, 'aboutTmp');
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
        }, 'aboutCtrl');
        return deferred.promise;
      }]
    }
  });

}