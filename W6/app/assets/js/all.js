// $(document).ready(() => {
//   console.log('Hello Bootstrap4');
// });

$(document).ready(function () {
  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})