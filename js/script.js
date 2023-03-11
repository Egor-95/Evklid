// hero-swiper
var swiper = new Swiper('.swiper-container', {
  
  speed: 600,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
});
// work-tabs
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach (function (e) {
e.addEventListener ('click',function (e) {
  const tab = e.currentTarget.dataset.path
  document.querySelectorAll('.work__btn').forEach ( elem => {
  elem.classList.remove ('work__btn__active')
  })
  this.classList.add('work__btn__active')
  document.querySelectorAll('.tab-content').forEach (function (e){
    e.classList.remove('tab-content--active')
    document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active')
  })
})
  })
})
// question-accordion
$( function() {
  $( "#accordion" ).accordion();
} );
$( "#accordion" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: 'panel'
});
