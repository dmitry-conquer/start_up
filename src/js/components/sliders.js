import Swiper, { Navigation, Autoplay, Pagination } from "swiper";

export function initSliders() {
   if (document.querySelector(".slider-hero")) {
      let sliderHero;

      const sliderMobOnly = () => {
         if (window.innerWidth <= 992 && !sliderHero) {
            sliderHero = new Swiper(".slider-hero", {
               modules: [],
               wrapperClass: "slider-hero__wrapper",
               slideClass: "slider-hero__slide",
               slidesPerView: 1,
               spaceBetween: 16,
               speed: 800,
               breakpoints: {
                  320: {
                     slidesPerView: 1.7,
                     spaceBetween: 20,
                  },
                  575.98: {
                     slidesPerView: 2.3,
                  },
                  767.98: {
                     slidesPerView: 3.2,
                  },
                  991.98: {
                     slidesPerView: 5,
                     spaceBetween: 15,
                  },
               },
            });
         } else if (window.innerWidth > 992 && sliderHero) {
            sliderHero.destroy();
            sliderHero = null;
         }
      };

      const throttle = (fun, ms) => {
         let locked = false;
         return () => {
            if (locked) return;
            locked = true;
            setTimeout(() => {
               fun();
               locked = false;
            }, ms);
         };
      };

      sliderMobOnly();
      window.addEventListener("resize", throttle(sliderMobOnly, 300));
   }

   if (document.querySelector(".app-quize__body")) {
      const aboutQuizeSlider = new Swiper(".app-quize__body", {
         modules: [Navigation],
         wrapperClass: "app-quize__wrapper",
         slideClass: "app-quize__block",
         speed: 800,
         slidesPerView: 1,
         spaceBetween: 50,
         simulateTouch: false,
         navigation: {
            prevEl: ".app-quize__prev",
            nextEl: ".app-quize__next",
         },
         on: {
            init: slider => {
               const totalSlides = document.querySelector(".number-quize__total");
               totalSlides.textContent = slider.slides.length;
            },
            slideChange: slider => {
               const currentSlide = document.querySelector(".number-quize__current");
               currentSlide.textContent = slider.realIndex + 1;
            },
         },
      });
      aboutQuizeSlider.update();

      const quizeForm = document.querySelector(".app-quize__body");
      quizeForm.addEventListener("submit", e => {
         e.preventDefault();
         quizeForm.querySelector("button").textContent = "Дякуємо!";
      });
   }

   if (document.querySelector(".slider-clients")) {
      new Swiper(".slider-clients", {
         modules: [Autoplay],
         wrapperClass: "slider-clients__wrapper",
         slideClass: "slider-clients__slide",
         slidesPerView: 7,
         spaceBetween: 30,
         autoplay: {
            delay: 1,
         },
         loop: true,
         speed: 3000,
         breakpoints: {
            320: {
               slidesPerView: 3,
            },
            575.98: {
               slidesPerView: 4,
            },
            767.98: {
               slidesPerView: 5,
            },
            991.98: {
               slidesPerView: 7,
            },
         },
      });
   }

   if (document.querySelector(".slider-connect")) {
      new Swiper(".slider-connect", {
         modules: [Autoplay, Pagination],
         wrapperClass: "slider-connect__wrapper",
         slideClass: "slider-connect__slide",
         slidesPerView: 1,
         spaceBetween: 30,
         loop: true,
         speed: 800,
         autoplay: {
            delay: 5000
         },
         pagination: {
            el: '.slider-connect__pagination',
            clickable: true
         }
      });
   }
}
