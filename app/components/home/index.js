import homeCtrl from './controller/homeCtroller'
import homeService from './service/homeService'
export default angular.module('home', [])
  .controller('homeCtrl', homeCtrl)
  .service('homeService', homeService)
  .name;