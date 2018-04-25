const _init_ = Symbol("_init_");
export default class homeCtrl {
  constructor(homeService) {
      Object.assign(this, {
        homeService
      })
      this[_init_]();

    }
    [_init_]() {
      this.option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };
      this.dateRange = '';
      this.singleDateRange1 = {
        timePicker: true,
        timePicker24Hour: true,
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true,
        clearLabel: 'Clear',
        autoUpdateInput: false,
        locale: {
          separator: ' - ',
          format: 'YYYY-MM-DD'
        }
      }
      this.singleDateRange2 = {
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true,
        clearLabel: 'Clear',
        autoUpdateInput: false,
        locale: {
          separator: ' - ',
          format: 'YYYY-MM-DD'
        }
      }
      this.singleDateRange3 = {
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true,
        clearLabel: 'Clear',
        autoUpdateInput: false,
        locale: {
          separator: ' - ',
          format: 'YYYY-MM-DD'
        }
      }
      this.singleDateRange4 = {
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true,
        clearLabel: 'Clear',
        autoUpdateInput: false,
        locale: {
          separator: ' - ',
          format: 'YYYY-MM-DD'
        }
      }
      this.dateOptions = {
        "startDate": "2018-03-01",
        "endDate": "2018-03-31 "
      }
    }
  clearModel(opts) {
    delete opts.startDate
    delete opts.endDate
  }
  setDate() {
    console.log('controller')
    console.log(this.dateOptions)
    if (this.min) this.dateOptions.minDate = this.min
    if (this.max) this.dateOptions.maxDate = this.max
    if (this.startDate) this.dateOptions.startDate = this.startDate
    if (this.endDate) this.dateOptions.endDate = this.endDate
  }
  dialogImg() {
    this.ImgLightbox.openModal(this.images, 0)
  }
  showcallback(event, ele) {
    console.log(event)
    // ele.setStartDate('2018-3-28')
  }
  list() {
    let _that = this;
    let parames = {
      'id': '2323',
      'name': 'kaka',
      'age': '18'
    }

  }
}
homeCtrl.$inject = ['homeService'];