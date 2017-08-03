angular.module('imgModal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('imglightbox.html',
    `<div class=modal-body ng-swipe-left=Lightbox.nextImage() ng-swipe-right=Lightbox.prevImage()>
      <div class=lightbox-nav>
        <button class=close aria-hidden=true ng-click=$dismiss()>×</button>
        <div class=btn-group>
          <a class=\"btn btn-xs btn-default\"  ng-if=\"Lightbox.images.length > 1\" ng-click=Lightbox.prevImage()>‹ 上一张</a> 
          <a ng-href={{Lightbox.imageUrl}} target=_blank class=\"btn btn-xs btn-default\" title=\"在新标签页打开b\">在新标签页打开</a> 
          <a class=\"btn btn-xs btn-default\"  ng-if=\"Lightbox.images.length > 1\" ng-click=Lightbox.nextImage()>下一张 ›</a>
          <a class=\"btn btn-xs btn-default\" ng-click=Lightbox.rotate()>旋转</a>
        </div>
        </div>
        <div class=lightbox-image-container>
          <div class=lightbox-image-caption><span>{{Lightbox.imageCaption}}</span></div>
          <img imglightbox-src={{Lightbox.imageUrl}}>
      </div>
    </div>`
  );
}]);