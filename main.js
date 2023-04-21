new Swiper('.swiper' ,{
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
  
  mousewheel: {
    sensivity: 1,
  },
  loop: true,
  slideToClickedSlide: true,
  initialSlide: 2,
})