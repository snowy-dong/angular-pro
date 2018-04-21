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
    scope.model = scope.model || ''
    let stashDatePicker;

    _init(opts)

    function _init(opts) {
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
      if (opts.startDate && opts.endDate & opts.singleDatePicker) {
        if (Date.parse(opts.endDate) > Date.parse(opts.maxDate)) {
          opts.endDate = opts.maxDate
        }
        if (Date.parse(opts.startDate) < Date.parse(opts.minDate)) {
          opts.startDate = opts.minDate
        }
        scope.model = `${opts.startDate} ${opts.locale.separator} ${opts.endDate} `
      }
      stashDatePicker = elem.data('daterangepicker');
      elem.daterangepicker(opts, function (start, end, label) {
        scope.model = opts.singleDatePicker ? `${start.format(opts.locale.format)}` : `${start.format(opts.locale.format)} ${opts.locale.separator} ${end.format(opts.locale.format)} `
        scope.$apply(scope.model)
      });

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
      if (!n && stashDatePicker) {
        scope.model = `${stashDatePicker.startDate._i} ${opts.locale.separator} ${stashDatePicker.endDate._i} `
      }
    }, true);
    scope.$watch(function () {
      return scope.dateOptions;
    }, function (n, o) {
      if (n) {
        _init(angular.merge(opts, n))
      }
    }, true);
  }
}