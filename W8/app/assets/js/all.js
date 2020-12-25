//漢堡選單
let hamburgerBtn = document.querySelector('.hamburger-btn');
let body = document.querySelector('body');
hamburgerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!Array.from(body.classList).includes('menushow')) { body.classList.add('menushow') } else {
    body.classList.remove('menushow');
  }
})

//sticky effect
let hotnannyTitle = document.querySelector('.hotnanny-content-title');
window.addEventListener('scroll', stickyHandler)

function stickyHandler() {
  if ((body.clientWidth) > (900)) {
    hotnannyTitle.classList.add('sticky');
  } else {
    hotnannyTitle.classList.remove('sticky');
  }
};

//點擊更換圖片

let photoList = document.querySelectorAll('.photoList img');
let photoFocus = document.querySelector('.photoFocus');

photoList.forEach(function (item) {
  item.addEventListener('click', changePhoto);
})

function changePhoto(e) {
  let photoListData = e.target.getAttribute('src');
  let photoFocusList = photoFocus.attributes[0];
  photoFocusList.textContent = photoListData;
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

