"use strict";

//漢堡選單
var hamburgerBtn = document.querySelector('.hamburger-btn');
var body = document.querySelector('body');
hamburgerBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (!Array.from(body.classList).includes('menushow')) {
    body.classList.add('menushow');
  } else {
    body.classList.remove('menushow');
  }
}); //點擊更換圖片

var photoArea = document.querySelectorAll('.photoList div');
var photoFocus = document.querySelector('.photoFocus');
photoArea.forEach(function (item) {
  item.addEventListener('click', changePhoto);
});

function changePhoto(e) {
  var photoAreaList = Array.from(e.target.classList);
  var photoFocusList = Array.from(photoFocus.classList);
  photoFocusList.splice(0, 1, photoAreaList[0]);
  photoFocus.setAttribute('class', photoFocusList.join(" "));
}

; //swiper 效果

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  slidesPerView: 3
}); //初始化AOS

AOS.init();
//# sourceMappingURL=all.js.map
