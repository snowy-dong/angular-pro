// 读取token
export default class AppConfigService {
  constructor() {
    this.token = undefined;
    this.load();
  }
  load() {
    try {
      return angular.extend(this, angular.fromJson(sessionStorage.getItem("token")))
    } catch (Error) { }
    return this;
  }

  save() {
    sessionStorage.setItem("token", angular.toJson(angular.extend({}, this)));
  }
}