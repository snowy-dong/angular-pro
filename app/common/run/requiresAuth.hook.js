/**
 * This run block registers a Transition Hook which protects
 * routes that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
// 每次路由变化 查看是否合法路由
authHookRunBlock.$inject = ['$transitions', 'AuthService'];
export function authHookRunBlock($transitions, AuthService) {
  
  let requiresAuthCriteria = {
    to: (state) => state.data && state.data.requiresAuth
  };
  // 验证是否合法 重定向
  let redirectToLogin = (transition) => {
    let AuthService = transition.injector().get('AuthService');
    let $state = transition.router.stateService;
    // 如果没有token 跳转login页面
    if (!AuthService.isAuthenticated()) {
      return $state.target('login', undefined, { location: false });
    }
  };

  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}