'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Site Wide Scrolling
$('.scroll-pg').owlCarousel(_defineProperty({
  items: 1,
  loop: false,
  center: false,
  mouseDrag: true,
  margin: 1,
  URLhashListener: true,
  startPosition: 'URLHash',
  responsive: true
}, 'responsive', {

  0: {
    items: 1

  },

  1200: {
    items: 1

  },

  1201: {
    items: 2

  }

}));

// StripJS Right Side Preview boxes
$(document).ready(function () {
  $('#lawyer-clix').bind('click', function (event) {
    event.preventDefault();

    Strip.show([{ url: '../images/projects/lawyer-clix/lawyer-clix-preview-2.jpg' }, { url: '../images/projects/lawyer-clix/lawyer-clix-preview-1.jpg' }, { url: '../images/projects/lawyer-clix/lawyer-clix-preview-3.jpg' }]);
  });

  $('#rental-clix').bind('click', function (event) {
    event.preventDefault();

    Strip.show([{ url: '../images/projects/rental-clix/rental-clix-preview-1.jpg' }, { url: '../images/projects/rental-clix/rental-clix-preview-2.jpg' },{ url: '../images/projects/rental-clix/rental-clix-preview-3.jpg' }]);
  });
});
//# sourceMappingURL=main.js.map



