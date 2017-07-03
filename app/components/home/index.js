import homeCtrl from './controller/homeCtroller'
import homeServer from './service/homeServer'
export default angular.module('home', [])
  .controller('homeCtrl', homeCtrl)
  .service('homeServer', homeServer)
  .name;