import '../../common/module/ng-echarts/index';
import aboutCtrl from './controller/aboutCtroller'
import aboutService from './service/aboutService'
export default angular.module('about', ['echart'])
  .controller('aboutCtrl', aboutCtrl)
  .service('aboutService', aboutService)
  .name;