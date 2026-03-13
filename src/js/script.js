import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/scss/style.scss";

const close = document.querySelector(".header__menu-close"),
  burger = document.querySelector(".burger"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
});

try {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".works__button-next",
      prevEl: ".works__button-prev",
    },
    modules: [Navigation, Pagination],

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
} catch (e) {}
