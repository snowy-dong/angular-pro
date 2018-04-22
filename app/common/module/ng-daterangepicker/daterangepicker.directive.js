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
      resetOpts: "&",
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
    const opts = angular.merge({}, config, scope.dateOptions)
    const elem = $(element)
    scope.model = scope.model || null
    let stashDatePicker;
    let oldOptions = {}

    _init(opts)
    _setEvents()

    function _init(opts) {
      _setDate(opts)
      stashDatePicker = elem.data('daterangepicker');
      elem.daterangepicker(opts, function (start, end, label) {
        scope.dateOptions.startDate = `${start.format(opts.locale.format)}`
        scope.dateOptions.endDate = `${end.format(opts.locale.format)}`
        scope.model = opts.singleDatePicker ? `${start.format(opts.locale.format)}` : `${start.format(opts.locale.format)} ${opts.locale.separator} ${end.format(opts.locale.format)} `
        scope.$apply(scope.model)
      });
    }

    function _setDate(opts) {
      if (opts.minDate && stashDatePicker) {
        if (Date.parse(opts.minDate) > Date.parse(stashDatePicker.startDate._i) && Date.parse(opts.minDate) < Date.parse(stashDatePicker.endDate._i)) {
          opts.startDate = opts.minDate
        }
      }
      if (opts.maxDate && stashDatePicker) {
        if (Date.parse(opts.maxDate) > Date.parse(stashDatePicker.startDate._i) && Date.parse(opts.maxDate) < Date.parse(stashDatePicker.endDate._i)) {
          opts.endDate = opts.maxDate
        }
      }
      if (!opts.startDate && stashDatePicker) {
        opts.startDate = stashDatePicker.startDate._i
      }
      if (!opts.endDate && stashDatePicker) {
        opts.endDate = stashDatePicker.endDate._i
      }
      if (opts.startDate && opts.endDate) {
        if (Date.parse(opts.endDate) > Date.parse(opts.maxDate)) {
          opts.endDate = opts.maxDate
        }
        if (Date.parse(opts.startDate) < Date.parse(opts.minDate)) {
          opts.startDate = opts.minDate
        }
        if (!opts.singleDatePicker) {
          scope.model = `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
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
    scope.$watch(function () {
      return scope.model;
    }, function (n, o) {
      if (!n) {
        scope.resetOpts({
          opts: opts
        })
        stashDatePicker = null
        _init(opts)
      }
    }, true);
    scope.$watch(function () {
      return scope.dateOptions;
    }, function (n, o) {
      if (n) {
        console.log(opts)
        console.log(n)
        console.log(o)
        console.log(stashDatePicker)
        console.log(angular.merge(opts, o, n))
        _init(angular.merge(opts, o, n))
      }
    }, true);
  }
}