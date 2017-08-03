import homeCtrl from './controller/homeCtroller'
import homeService from './service/homeService'
require('../../common/utils/ImgModal/index.js')
export default angular.module('home', ['imgModal'])
  .controller('homeCtrl', homeCtrl)
  .service('homeService', homeService)
  .name;