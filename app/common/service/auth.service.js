// 认证服务
export default class AuthService {
  constructor(AppConfigService, $q, $timeout) {
    this.AppConfigService = AppConfigService;
    this.$q = $q;
    this.$timeout = $timeout;
    // 判断数据->假数据
    this.usernames = ['myself@angular.dev', 'devgal@angular.dev', 'devguy@angular.dev'];
  }

  // 是否有token
  isAuthenticated() {
    return !!this.AppConfigService.token;
  }

  // 认证请求
  authenticate(username, password) {
    let { $timeout, $q, AppConfigService } = this;

    const checkCredentials = () => $q((resolve, reject) => {
      var validUsername = this.usernames.indexOf(username) !== -1;
      var validPassword = password === 'password';
      return (validUsername && validPassword) ? resolve(username) : reject("Invalid username or password");
    });

    // 成功存token
    return $timeout(checkCredentials, 500)
        .then((authenticatedUser) => {
          AppConfigService.token = authenticatedUser;
          AppConfigService.save()
        });
  }
// 退出
  logout() {
    this.AppConfigService.token = undefined;
    this.AppConfigService.save();
  }
}
AuthService.$inject = ['AppConfigService', '$q', '$timeout'];
