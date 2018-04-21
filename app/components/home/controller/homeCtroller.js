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
      this.singleDateRange = {
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true
      }
      this.dateOptions = {
        "timePicker": true,
        "timePickerIncrement": 110,
        "timePickerSeconds": true,
        "showISOWeekNumbers": true,
        "alwaysShowCalendars": true,
        // "startDate": "2018-02-28",
        // "endDate": "2018-03-31"
      }
    }
  setDate() {
    this.min ? this.dateOptions.minDate = this.min : delete this.dateOptions.minDate
    this.max ? this.dateOptions.maxDate = this.max : delete this.dateOptions.maxDate
    this.startDate ? this.dateOptions.startDate = this.startDate : delete this.dateOptions.startDate
    this.endDate ? this.dateOptions.endDate = this.endDate : delete this.dateOptions.endDate
  }
  dialogImg() {
    // this.ImgLightbox.openModal(this.images, 0)
  }
  showcallback(event, ele) {
    console.log(event)
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