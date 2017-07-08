import aboutCtrl from './controller/aboutCtroller'
import aboutService from './service/aboutService'
export default angular.module('about', [])
  .controller('aboutCtrl', aboutCtrl)
  .service('aboutService',aboutService)
  .name;