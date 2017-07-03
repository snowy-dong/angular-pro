export default angular.module('ngRun',[])
.run(function($transitions) {
  $transitions.onStart({ to: 'about' }, function(trans) {
    var auth = trans.injector().get('AuthService');
    if (!auth.isAuthenticated()) {
      // User isn't authenticated. Redirect to a new Target State
      return trans.router.stateService.target('home');
    }
  })
})
.name