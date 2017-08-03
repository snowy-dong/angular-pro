const _init_ = Symbol("_init_");
export default class homeCtrl {
  constructor(homeService, ImgLightbox) {
      Object.assign(this, {
        homeService,
        ImgLightbox
      })
      this[_init_]();

    }
    [_init_]() {
      // this.list();
      this.images = [{

          'url': 'http://dl.bizhi.sogou.com/images/2014/12/25/1017415.jpg'

        },

        {

          'url': 'https://farm9.staticflickr.com/8573/16800210195_a8af2ba1bb_h.jpg'

        },

        {

          'url': 'https://farm6.staticflickr.com/5606/15425945368_6f6ae945fc.jpg'

        }

      ];
      console.log('homeCtrl')
    }
  dialogImg() {
    this.ImgLightbox.openModal(this.images, 0)
  }
  list() {
    let _that = this;
    let parames = {
      'id': '2323',
      'name': 'kaka',
      'age': '18'
    }
    _that.homeService.get('http://127.0.0.1:3000/comments', parames).then((data) => {
      // console.log(data);
    })
  }
}
homeCtrl.$inject = ['homeService', 'ImgLightbox'];