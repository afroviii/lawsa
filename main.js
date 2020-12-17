const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
selectElement('.nav-list').classList.add('active');
});
selectElement('.close').addEventListener('click', () => {
 selectElement('.nav-list').classList.remove('active');
});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  
  responsive: true
});

  $(function () {
        $('.slider-area').bxSlider({
          mode: 'fade',
          slideWidth: 700,
          pager: false
        });
      });