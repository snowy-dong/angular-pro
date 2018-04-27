// var echarts = require('echarts');
export default angular.module('echart', [])
  .directive('echart', function () {
    return {
      restrict: 'AE',
      scope: {
        option: '='
      },
      replace: true,
      template: '<div></div>',
      link: function (scope, element, attr) {
        $script('/libs/echarts.min.js', 'echars');
        $script.ready('echars', function () {
          _load(scope, element, attr);
        });

        function _load(scope, element, attr) {
          //处理chart高度和宽度
          var resizeWorldMapContainer = function () {
            element[0].style.width = (attr.width || window.innerWidth) + 'px';
            element[0].style.height = (attr.height || 400) + 'px';
          };
          // 设置容器高宽
          resizeWorldMapContainer();
          var myChart = echarts.init(element[0]);

          var option = {
            xAxis: {
              type: 'category',
              data: []
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [],
              type: 'line'
            }]
          };
          myChart.setOption(scope.option || option);
          scope.$watch(function () {
            return scope.option;
          }, function (n, o) {
            if (n) {
              myChart.setOption(n);
            }
          }, true);
          //当浏览器窗口发生变化的时候调用div的resize方法
          window.addEventListener('resize', chartResize);
          scope.$on('$destory', function () {
            window.removeEventListener('resize', chartResize);
          });

          function chartResize() {
            myChart.resize();
          }
        }
      }
    };
  }).name;