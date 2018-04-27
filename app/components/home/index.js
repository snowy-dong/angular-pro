import 'bootstrap/dist/css/bootstrap.css';
import homeCtrl from './controller/homeCtroller'
import homeService from './service/homeService'
// import '../../common/utils/ImgModal/index.js'
// import '../../common/module/ng-echarts'
export default angular.module('home', [])
  .controller('homeCtrl', homeCtrl)
  .service('homeService', homeService)
  .name;