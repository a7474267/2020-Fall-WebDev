//漢堡選單
let hamburgerBtn = document.querySelector('.hamburger-btn');
let body = document.querySelector('body');
hamburgerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!Array.from(body.classList).includes('menushow')) { body.classList.add('menushow') } else {
    body.classList.remove('menushow');
  }
})

//點擊更換圖片

let photoArea = document.querySelectorAll('.photoList div');
let photoFocus = document.querySelector('.photoFocus');

photoArea.forEach(function (item) {
  item.addEventListener('click', changePhoto);
})

function changePhoto(e) {
  let photoAreaList = Array.from(e.target.classList);
  let photoFocusList = Array.from(photoFocus.classList);
  photoFocusList.splice(0, 1, photoAreaList[0]);
  photoFocus.setAttribute('class', photoFocusList.join(" "));
};

//swiper 效果
let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  slidesPerView: 3,
});

//初始化AOS
AOS.init();

