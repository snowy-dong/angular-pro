import maxString from './maxString';
export default angular.module('ngFilter',[])
// 最大字符串
.filter('maxString', maxString)
.name