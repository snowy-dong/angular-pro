import 'angular';
import 'oclazyload';
import '@uirouter/angularjs';
import './styles/app.less';
import ngConfig from './common/config/ngConfig';
import ngCtroller from './common/controller/ngCtroller';
import ngFactory from './common/factory/ngFactory';
import ngService from './common/service/ngService';
import ngDirective from './common/directive/ngDirective';
import ngFilter from './common/filter/ngFilter';
import ngRun from './common/run/ngRun';
import $script from 'scriptjs'
import './common/module/ng-daterangepicker'
const app = angular.module('app', [
  'ui.router',
  'oc.lazyLoad',
  ngConfig,
  ngCtroller,
  ngFactory,
  ngService,
  ngDirective,
  ngFilter,
  ngRun,
  'ng.daterangepicker'
]);
window.$script = $script;

export default app;