const _init_ = Symbol("_init_");
export default class aboutCtrl {
  constructor(aboutService) {
Object.assign(this,{aboutService});
      this[_init_]()
    }
    [_init_]() {
      // this.list();
      console.log('aboutCtrl')
    }
    list(){
       let _that = this;
       var parames=[2,3,4,54,5];
    _that.aboutService.get('http://127.0.0.1:3000/posts',parames).then((data) => {
      // console.log(data);
    })
    }
}
aboutCtrl.$inject = ['aboutService'];