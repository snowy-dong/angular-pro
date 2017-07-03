const _init_ = Symbol("_init_");
export default class aboutCtrl {
  constructor() {
      this[_init_]()
    }
    [_init_]() {
      console.log('aboutCtrl')
    }
}
aboutCtrl.$inject = [];