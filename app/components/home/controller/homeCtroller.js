const _init_ = Symbol("_init_");
export default class homeCtrl {
  constructor(homeServer) {
      Object.assign(this, {
        homeServer
      })
      this[_init_]();

    }
    [_init_]() {
      // this.list();
      console.log('homeCtrl')
    }
  list() {
    let _that = this;
    _that.homeServer.get('http://127.0.0.1:3000/posts').then((data) => {
      console.log(data);
    })
  }
}
homeCtrl.$inject = ['homeServer'];