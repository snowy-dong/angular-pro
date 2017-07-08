const _init_ = Symbol("_init_");
export default class homeCtrl {
  constructor(homeService) {
      Object.assign(this, {
        homeService
      })
      this[_init_]();

    }
    [_init_]() {
      this.list();
      console.log('homeCtrl')
    }
  list() {
    let _that = this;
    let parames = {
      'id':'2323',
      'name':'kaka',
      'age':'18'
    }
    _that.homeService.get('http://127.0.0.1:3000/comments',parames).then((data) => {
      // console.log(data);
    })
  }
}
homeCtrl.$inject = ['homeService'];