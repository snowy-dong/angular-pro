const _init_ = Symbol("_init_");
export default class aboutCtrl {
  constructor($scope, $rootScope, $state, $filter, aboutService) {
      Object.assign(this, {
        $scope,
        $rootScope,
        $state,
        $filter,
        aboutService
      });
      this[_init_]();
    }
    [_init_]() {
      // this.getDateArray();
      this.totalConsumption();
      this.totalAmount();
      this.activities();
      this.consumptionStore();
    }
  getDateArray() {
    let dateArray = [],
      today = new Date().setHours(0, 0, 0, 0);
    for (var i = 0; i < 7; i++) {
      today = today - 86400000;
      dateArray.unshift(this.$filter('date')(new Date(today), 'MM-dd'));
    }
    return dateArray;
  }
  totalConsumption() {
    this.totalConsumptionOption = {
      color: ['#FD853C', '#007CF9'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        extraCssText: 'box-shadow: 0 2px 6px -1px rgba(51,51,51,0.20);',
        textStyle: {
          color: '#666666',
          fontSize: '14px'
        },
        formatter: function (params, ticket) {
          var res = `${params[0].name}<br/>`;
          for (var i = 0, l = params.length; i < l; i++) {
            res += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[i].color}"></span>
              ${params[i].seriesName} : 
              <span style="color:${params[i].color}">${params[i].value}元</span>
              <br/>`;
          }
          return res;
        }
      },
      legend: {
        data: [{
          name: '实际充值金额',
          icon: 'roundRect',
          textStyle: {
            color: '#FD853C'
          }
        }, {
          name: '充值消费金额',
          icon: 'roundRect',
          textStyle: {
            color: '#007CF9'
          }
        }],
        bottom: 0,
        left: 90,
        orient: 'horizontal'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.getDateArray()
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          name: '实际充值金额',
          symbolSize: 10,
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        },
        {
          name: '充值消费金额',
          symbolSize: 10,
          data: [120, 232, 301, 934, 1890, 1530, 1020],
          type: 'line'
        }
      ]
    };
  }
  totalAmount() {
    this.totalAmountOption = {
      color: ['#FD853C', '#007CF9'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        extraCssText: 'box-shadow: 0 2px 6px -1px rgba(51,51,51,0.20);',
        textStyle: {
          color: '#666666',
          fontSize: '14px'
        },
        formatter: function (params, ticket) {
          var res = `${params[0].name}
            <br/>
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[0].color}"></span> 
            储值金余额 : 
            <span style="color:${params[0].color}">${(params[0].value + params[1].value)}元</span>
            <br/>`;
          for (var i = 0, l = params.length; i < l; i++) {
            res += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[i].color}"></span>
              ${params[i].seriesName} : 
              <span style="color:${params[i].color}">${params[i].value}元</span>
              <br/>`;
          }
          return res;
        }
      },
      legend: {
        data: [{
          name: '赠送金额',
          icon: 'roundRect',
          textStyle: {
            color: '#FD853C'
          }
        }, {
          name: '实际充值金额',
          icon: 'roundRect',
          textStyle: {
            color: '#007CF9'
          }
        }],
        bottom: 0,
        left: 90,
        orient: 'horizontal'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: this.getDateArray()
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
          name: '赠送金额',
          type: 'line',
          symbolSize: 10,
          areaStyle: {
            normal: {
              color: '#FFF0E8'
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '实际充值金额',
          type: 'line',
          symbolSize: 10,
          areaStyle: {
            normal: {
              color: '#D9ECFF'
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    };
  }
  activities() {
    this.activitiesOption = {
      color: ['#007CF9', '#67D26B', '#FFD141', '#FF5E4F'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        extraCssText: 'box-shadow: 0 2px 6px -1px rgba(51,51,51,0.20);',
        textStyle: {
          color: '#666666',
          fontSize: '14px'
        },
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow | cross'
        },
        formatter: function (params, ticket) {
          var res = `${params[0].name}<br/>参与充值活动2220次<br/>`;
          for (var i = 0, l = params.length; i < l; i++) {
            res += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[i].color}"></span>
              ${params[i].seriesName} : 
              <span style="color:${params[i].color}">${params[i].value}次</span>
              <br/>`;
          }
          return res;
        }
      },
      legend: {
        data: ['充200送50', '充50', '充50送5', '充100送20'],
        bottom: 0,
        left: 90,
        orient: 'horizontal'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: this.getDateArray()
      },
      series: [{
          name: '充200送50',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [320, 302, 30, 360, 22, 70, 410]
        },
        {
          name: '充50',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [120, 132, 230, 210, 72, 130, 110]
        },
        {
          name: '充50送5',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [220, 182, 60, 310, 92, 30, 110]
        },
        {
          name: '充100送20',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [150, 212, 90, 140, 112, 310, 40]
        }
      ]
    };
  }
  consumptionStore() {
    this.rechargeManage = {
      color: ['#007CF9'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        extraCssText: 'box-shadow: 0 2px 6px -1px rgba(51,51,51,0.20);',
        textStyle: {
          color: '#666666',
          fontSize: '14px'
        },
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow | cross'
        },
        formatter: function (params, ticket) {
          var res = `${params[0].name}<br/>`;
          for (var i = 0, l = params.length; i < l; i++) {
            res += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[i].color}"></span>
              ${params[i].seriesName} : 
              <span style="color:${params[i].color}">${params[i].value}元</span>
              <br/>`;
          }
          return res;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['门店1', '门店2', '门店3', '门店4', '门店4', '门店6']
      },
      series: [{
        name: '储值金消费',
        data: [120, 200, 150, 80, 70, 110],
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        }
      }]
    };
  };
  list() {
    let _that = this;
    console.log(_that)
  }
}
aboutCtrl.$inject = ['$scope', '$rootScope', '$state', '$filter', 'aboutService'];