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
}); //sticky effect

var hotnannyTitle = document.querySelector('.hotnanny-content-title');
window.addEventListener('scroll', stickyHandler);

function stickyHandler() {
  if (body.clientWidth > 900) {
    hotnannyTitle.classList.add('sticky');
  } else {
    hotnannyTitle.classList.remove('sticky');
  }
}

; //點擊更換圖片

var photoList = document.querySelectorAll('.photoList img');
var photoFocus = document.querySelector('.photoFocus');
photoList.forEach(function (item) {
  item.addEventListener('click', changePhoto);
});

function changePhoto(e) {
  var photoListData = e.target.getAttribute('src');
  var photoFocusList = photoFocus.attributes[0];
  photoFocusList.textContent = photoListData;
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
