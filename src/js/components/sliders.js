import Swiper, { Navigation, Autoplay, Pagination, Thumbs } from "swiper";

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
            delay: 5000,
         },
         pagination: {
            el: ".slider-connect__pagination",
            clickable: true,
         },
      });
   }

   if (document.querySelector(".consultation__body")) {
      new Swiper(".consultation__body", {
         modules: [Navigation],
         wrapperClass: "consultation__list",
         slideClass: "consultation__item",
         slidesPerView: 4,
         spaceBetween: 35,
         loop: true,
         speed: 800,
         navigation: {
            prevEl: ".consultation__prev",
            nextEl: ".consultation__next",
         },
         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 15,
            },
            575.98: {
               slidesPerView: 2.4,
            },
            // 768: {
            //    slidesPerView: 2.4,
            // },
            992: {
               slidesPerView: 3.4,
            },
            1200: {
               slidesPerView: 4,
            },
         },
      });
   }

   if (document.querySelector(".todo__body")) {
      new Swiper(".todo__body", {
         wrapperClass: "todo__list",
         slideClass: "todo__item",
         slidesPerView: "auto",
         spaceBetween: 8,
         speed: 800,
      });
   }

   if (document.querySelector(".blog-services__body")) {
      new Swiper(".blog-services__body", {
         modules: [Navigation],
         wrapperClass: "blog-services__list",
         slideClass: "blog-services__item",
         slidesPerView: 3,
         spaceBetween: 16,
         loop: true,
         speed: 800,
         navigation: {
            prevEl: ".blog-services__prev",
            nextEl: ".blog-services__next",
         },
         breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 15,
            },
            470: {
               slidesPerView: 1.7,
            },
            575: {
               slidesPerView: 2.3,
            },
            768: {
               slidesPerView: 2.5,
            },
            992: {
               slidesPerView: 3,
            },
         },
      });
   }

   if (document.querySelector(".slider-project")) {
      const thumbProjectSlider = new Swiper(".thumbs-swiper-project", {
         wrapperClass: "thumbs-swiper-project__wrapper",
         slideClass: "thumbs-swiper-project__slide",
         slidesPerView: 4,
         spaceBetween: 16,
         speed: 800,
              breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 15,
            },
            470: {
               slidesPerView: 2.4,
            },
            575: {
               slidesPerView: 3.4,
            },
            // 768: {
            //    slidesPerView: 2.5,
            // },
            819.98: {
               slidesPerView: 4,
            },
         },
      });
      new Swiper(".slider-project", {
         modules: [Thumbs, Autoplay],
         autoplay: {
            delay: 3000,
         },
         thumbs: {
            swiper: thumbProjectSlider,
         },
         wrapperClass: "slider-project__wrapper",
         slideClass: "slider-project__slide",
         slidesPerView: 1,
         spaceBetween: 35,
         speed: 800,
      });
   }
}
