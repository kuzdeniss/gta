import Swiper from "swiper";

window.onload = function() {
  main.init();
};

const main = {
  init: () => {
    main.slider();
    main.shopForm();
  },
  slider: () => {
    var mobile = new Swiper(".mobile-slider", {
      pagination: {
        el: ".mobile-pagination"
      }
    });
    var station = new Swiper(".salon-slider", {
      slidesPerView: 8,
      navigation: {
        nextEl: ".salon-right",
        prevEl: ".salon-left"
      }
    });
    var item = new Swiper(".profile-slider", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      // effect: 'fade',
      navigation: {
        nextEl: ".profile-next",
        prevEl: ".profile-prev"
      }
    });
    var itemSpeed = new Swiper(".speedometr-slider", {
      // effect: 'fade',
      navigation: {
        nextEl: ".arrow-left",
        prevEl: ".arrow-right"
      }
    });
    var smallslider = new Swiper(".profile-slider--small", {
      // effect: 'fade',
      slidesPerView: 1,

      navigation: {
        nextEl: ".profile-arrow--right",
        prevEl: ".profile-arrow--left"
      }
    });
  },
  shopForm: () => {
    // let button = document.getElementById("profile-button"), item = document.getElementsByClassName("profile-item");
    // button.addEventListener('click',function(){
    //   alert("1");
    //   // item.classlist.show();
    // })
  }
};
