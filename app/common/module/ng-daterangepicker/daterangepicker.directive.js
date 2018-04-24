import moment from 'bootstrap-daterangepicker/moment.min.js'
import $ from 'bootstrap-daterangepicker/node_modules/jquery/dist/jquery.js';
import 'bootstrap-daterangepicker/daterangepicker.js'
import config from './daterangepicker.config'
// require('bootstrap-daterangepicker/daterangepicker.css')
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
      clearOpts: '&',
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
    let opts = scope.dateOptions
    const elem = $(element)
    scope.model = scope.model || null
    let stashDatePicker;
    let oldP = {}
    _init(opts)
    _setEvents()

    function _init(opts) {
      console.log(opts)
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
    scope.$watch(function () {
      return scope.model;
    }, function (n, o) {
      console.log('modelChange')
      if (n) {
        _isValide(n, o)
      }
      if (n === undefined && o !== null) {
        scope.clearOpts({
          opts: opts
        })
        stashDatePicker = null
        if (opts.startDate && opts.endDate) {
          scope.model = opts.singleDatePicker ? `${opts.startDate}` : `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
        }
        _init(opts)
      }
    }, true);

    scope.$watch(function () {
      return scope.dateOptions;
    }, function (n, o) {
      _init(opts)
    }, true);
    
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
    
    function _isValide(n, o) {
      let formatLength = opts.locale.format.length
      if (!opts.singleDatePicker) {
        let startDate = n.split(`${opts.locale.separator}`)[0].trim()
        let endDate = n.split(`${opts.locale.separator}`)[1].trim()
        if (!moment(startDate, opts.locale.format, true).isValid() && startDate.length >= formatLength || !moment(endDate, opts.locale.format, true).isValid() && endDate.length >= formatLength) {
          if (!moment(startDate, opts.locale.format, true).isValid() && startDate.length >= formatLength) {
            startDate = o.split(`${opts.locale.separator}`)[0].trim()
          }
          if (!moment(endDate, opts.locale.format, true).isValid() && endDate.length >= formatLength) {
            endDate = o.split(`${opts.locale.separator}`)[1].trim()
          }
          scope.model = startDate + ` ${opts.locale.separator} ` + endDate
        }
      }
      if (opts.singleDatePicker) {
        if (!moment(n, opts.locale.format, true).isValid() && n.length >= formatLength) {
          scope.model = o
        }
      }
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
      console.log(opts.startDate)
      if (opts.startDate) {
        scope.model = `${opts.startDate}`
      }
    }

    function _setDouble() {
      if ((Date.parse(opts.startDate) < Date.parse(opts.minDate)) || (Date.parse(opts.endDate) > Date.parse(opts.minDate))) {
        opts.startDate = opts.minDate
      }
      if ((Date.parse(opts.endDate) > Date.parse(opts.maxDate)) || (Date.parse(opts.startDate) < Date.parse(opts.maxDate))) {
        opts.endDate = opts.maxDate
      }
    
      if (opts.startDate && opts.endDate && ( Date.parse(opts.startDate) <  Date.parse(opts.endDate))) {
        scope.model = `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
      }else{
        delete opts.startDate
        delete opts.endDate
        scope.model = null
      }
    }

  }
}