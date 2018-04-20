import 'bootstrap/dist/css/bootstrap.css';
import homeCtrl from './controller/homeCtroller'
import homeService from './service/homeService'
require('../../common/utils/ImgModal/index.js')
import '../../common/module/ng-echarts'
import '../../common/module/ng-daterangepicker'
export default angular.module('home', ['imgModal', 'echarts', 'ng.daterangepicker'])
  .controller('homeCtrl', homeCtrl)
  .service('homeService', homeService)
  .name;