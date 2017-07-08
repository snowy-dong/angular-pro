import basicService from './basicServicer'
import AuthService from './auth.service'
import AppConfigService from './appConfig.service'
export default angular.module('ngService', [])
  .service('basicService', basicService)
  .service('AuthService', AuthService )
  .service('AppConfigService', AppConfigService )
  .name