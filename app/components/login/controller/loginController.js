const _init_ = Symbol("_init_");
export default class loginCtrl {
  constructor() {
      this[_init_]()
    }
    [_init_]() {
      console.log('loginctrl')
    }
}
loginCtrl.$inject = [];