const _init_ = Symbol("_init_");
export default class aboutCtrl {
  constructor(aboutService) {
      Object.assign(this, {
        aboutService
      });
      this[_init_]()
    }
    [_init_]() {
      // this.list();
      console.log(angular)

    }
  list() {
    let _that = this;
    console.log(_that)

  }
}
aboutCtrl.$inject = ['aboutService'];