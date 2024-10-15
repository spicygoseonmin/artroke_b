window.addEventListener("load", function(){
    const sw_class_mainimg = new Swiper(".sw-main-img", {
        loop: true,
        slidesPerView: 1.8, // 보여지는 슬라이드 개수
        centeredSlides: true,
        spaceBetween: 16, // 슬라이드 간의 간격
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})