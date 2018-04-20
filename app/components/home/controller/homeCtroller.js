const _init_ = Symbol("_init_");
export default class homeCtrl {
  constructor(homeService, ImgLightbox) {
      Object.assign(this, {
        homeService,
        ImgLightbox
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
      this.dateRange='';
      this.singleDateRange={
        clearLabel: 'Clear',
        autoUpdateInput: false,
        "singleDatePicker": true
      }
      this.dateOptions={
      "timePicker": true,
      "timePickerIncrement": 110,
      "timePickerSeconds": true,
      "showISOWeekNumbers": true,
        "ranges": {
          "Today": [
              "2018-04-20",
              "2018-04-20"
          ],
          "Yesterday": [
              "2018-04-19",
              "2018-04-19"
          ],
          "Last 7 Days": [
              "2018-04-14",
              "2018-04-20"
          ],
          "Last 30 Days": [
              "2018-03-22",
              "2018-04-20"
          ],
          "This Month": [
              "2018-03-31",
              "2018-04-30"
          ],
          "Last Month": [
              "2018-02-28",
              "2018-03-31"
          ]
      },
      "alwaysShowCalendars": true,
      "startDate": "2018-02-28",
      "endDate": "2018-03-31"
      }
     }
  setDate() {
    this.dateOptions.minDate = this.min
    this.dateOptions.maxDate = this.max
    this.dateOptions.startDate =  this.startDate
    this.dateOptions.endDate =  this.endDate
    }
  dialogImg() {
    this.ImgLightbox.openModal(this.images, 0)
  }
  showcallback(event, ele){
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
homeCtrl.$inject = ['homeService', 'ImgLightbox'];