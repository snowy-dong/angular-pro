const _init_ = Symbol("_init_");
export default class loginCtrl {
   constructor(AppConfigService, AuthService, $state) {
    Object.assign(this,{AppConfigService, AuthService, $state})
    this.usernames = AuthService.usernames;
    this.credentials = {
      username: AppConfigService.emailAddress,
      password: 'password'
    };
    this[_init_]()
    }
    [_init_]() {
      this.AuthService.logout();
      console.log('loginctrl')
    }
    login (credentials){
      this.authenticating = true;
      const returnToOriginalState = () => {
        this.$state.go('home');
      };

      const showError = (errorMessage) =>this.errorMessage = errorMessage;
      this.AuthService.authenticate(credentials.username, credentials.password)
      .then(returnToOriginalState)
      .catch(showError)
      .finally(() => this.authenticating = false);
    }
}
loginCtrl.$inject = ['AppConfigService','AuthService','$state'];