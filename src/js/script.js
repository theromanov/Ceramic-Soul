import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import JustValidate from "just-validate";
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

try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));

      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "flex";
    });
  });

  contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

try {
  const validator = new JustValidate(".form");

  validator
    .addField("#name", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
      {
        rule: "minLength",
        value: 3,
      },
    ])
    .addField("#textarea", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ])
    .addField(
      "#checkbox",
      [
        {
          rule: "required",
          errorMessage: "Mark the box",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#checkbox")
          .parentElement.parentElement.querySelector(
            ".errors-checkbox-container",
          ),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}

try {
  const validate = new JustValidate(".footer__form");

  validate
    .addField(
      "#footer-email",
      [
        {
          rule: "required",
        },
        {
          rule: "email",
        },
        {
          rule: "minLength",
          value: 5,
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer-email")
          .parentElement.parentElement.querySelector(
            ".error-footer-email-container",
          ),
      },
    )
    .addField(
      "#footer__form-check",
      [
        {
          rule: "required",
          errorMessage: "Mark the box",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__form-check")
          .parentElement.parentElement.querySelector(
            ".error-footer-checkbox-container",
          ),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}
