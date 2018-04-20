import daterangepicker from './daterangepicker.directive'
import config  from './daterangepicker.config'
export default angular.module('ng.daterangepicker', [])
  .constant('config', config)
  .directive('daterangepicker', daterangepicker)
  