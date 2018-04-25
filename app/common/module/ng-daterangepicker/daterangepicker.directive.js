import moment from 'bootstrap-daterangepicker/moment.min.js'
import $ from 'bootstrap-daterangepicker/node_modules/jquery/dist/jquery.js';
import 'bootstrap-daterangepicker/daterangepicker.js'
import dateRangePickerConfig from './dateRangePickerConfig.js'
require.ensure([], () => {
  require('bootstrap-daterangepicker/daterangepicker.css');
}, 'daterangepicker.css');
export default function daterangepicker() {
  return {
    restrict: 'AE',
    require: 'ngModel',
    scope: {
      dateOptions: '=',
      model: "=ngModel",
      clearModel: '&',
      dateApply: '&',
      dateCancel: '&',
      dateShow: '&',
      dateHide: '&',
      dateShowCalendar: '&',
      dateHideCalendar: '&'
    },
    link: link
  }

  function link(scope, element, attr, daterangeCtrl) {
    scope.dateOptions= angular.merge({}, dateRangePickerConfig, scope.dateOptions)
    let opts = scope.dateOptions
    
    const elem = $(element)
    scope.model = scope.model || null
    let stashDatePicker;
    let oldP = {}
    _init(opts)
    _setEvents()

    function _init(opts) {
      if (!opts.startDate) {
        if (stashDatePicker) delete stashDatePicker.startDate
        delete opts.startDate
      }
      if (!opts.endDate) {
        if (stashDatePicker) delete stashDatePicker.endDate
        delete opts.endDate
      }
      if (!opts.startDate || !opts.endDate) {
        scope.model = null
      }
      if (!opts.singleDatePicker) {
        _setDouble(opts)
      } else {
        _setSingle(opts)
      }
      stashDatePicker = elem.data('daterangepicker');
      elem.daterangepicker(opts, function (start, end, label) {
        if (start) scope.dateOptions.startDate = `${start.format(opts.locale.format)}`
        if (end) scope.dateOptions.endDate = `${end.format(opts.locale.format)}`
        scope.model = opts.singleDatePicker ? `${start.format(opts.locale.format)}` : `${start.format(opts.locale.format)} ${opts.locale.separator} ${end.format(opts.locale.format)} `
        scope.$apply(scope.model)
      });
    }

    function _setSingle(opts) {
      if (Date.parse(opts.startDate) < Date.parse(opts.minDate)) {
        opts.startDate = opts.minDate
        opts.endDate = opts.minDate
      }
      if (Date.parse(opts.startDate) > Date.parse(opts.maxDate)) {
        opts.startDate = opts.maxDate
        opts.endDate = opts.maxDate
      }
      if (opts.startDate) {
        scope.model = `${opts.startDate}`
      }
    }

    function _setDouble(opts) {
      // 两端 左
      if ((Date.parse(opts.startDate) <= Date.parse(opts.minDate)) && (Date.parse(opts.endDate) >= Date.parse(opts.minDate))) {
          opts.startDate = opts.minDate
      }
      // 两端 右
      if ((Date.parse(opts.startDate) <= Date.parse(opts.maxDate)) && (Date.parse(opts.endDate) >= Date.parse(opts.maxDate))) {
        opts.endDate = opts.maxDate
      }
      // 右
      if ((Date.parse(opts.startDate) >= Date.parse(opts.maxDate)) && (Date.parse(opts.endDate) >= Date.parse(opts.maxDate))) {
        opts.startDate = opts.maxDate
      }
      // 左
      if ((Date.parse(opts.startDate) <= Date.parse(opts.minDate)) && (Date.parse(opts.endDate) <= Date.parse(opts.minDate))) {
        opts.endDate = opts.minDate
      }
      if (opts.startDate && opts.endDate && (Date.parse(opts.startDate) <= Date.parse(opts.endDate))) {
        scope.model = `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
      } else {
        delete opts.startDate
        delete opts.endDate
        scope.model = null
      }
    }

    // watch 
    scope.$watch(function () {
      return scope.model;
    }, function (n, o) {
      console.log('modelChange')
      if (n) {
        _isValide(n, o)
      }
      if (!n && o !== null) {
        scope.clearModel({
          opts: opts
        })
        stashDatePicker = null
        if (opts.startDate && opts.endDate) {
          scope.model = opts.singleDatePicker ? `${opts.startDate}` : `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
        }
        _init(opts)
      }
      
    }, true);
    // watch 
    scope.$watch(function () {
      return scope.dateOptions;
    }, function (n, o) {
      _init(opts)
    }, true);

    function _isMoment(d, fmtL) {
      return (!moment(d, opts.locale.format, true).isValid() && d.length >= fmtL)
    }

    function _isValide(n, o) {
      let fmtL = opts.locale.format.length
      if (!opts.singleDatePicker) {
        let separator = `${opts.locale.separator}`
        let sd = n.split(`${separator}`)[0].trim(),
          ed = n.split(`${separator}`)[1].trim()
        if (_isMoment(sd, fmtL)) {
          sd = o.split(`${separator}`)[0].trim()
        }
        if (_isMoment(ed, fmtL)) {
          ed = o.split(`${separator}`)[1].trim()
        }
        scope.model = sd + ` ${separator} ` + ed
        return
      }
      if (opts.singleDatePicker) {
        if (_isMoment(n, fmtL)) {
          scope.model = o
          return
        }
      }
    }

    function _setEvents() {
      const events = ['apply', 'cancel', 'hide', 'showCalendar', 'hideCalendar'];
      events.forEach(function (eventName) {
        const localEventName = `date${eventName[0].toUpperCase() + eventName.slice(1)}`;
        if (angular.isFunction(scope[localEventName])) {
          elem.on(eventName + '.daterangepicker', e => scope[localEventName]({
            event: e,
            ele: elem
          }))
        }
      });
    }


  }
}