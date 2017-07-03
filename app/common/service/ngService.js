import basicService from './basicServicer'
export default angular.module('ngService', [])
  .service('basicService', basicService)
  .service('AuthService', function() {
  return {
    isAuthenticated: function() { return false }
  }
})
  .name