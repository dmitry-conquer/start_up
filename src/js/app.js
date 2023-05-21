"use strict";
// > - - - - - - - - [Import] - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - -
import { consoleInfo, isWebp } from "./lib/functions.js";
import { useDynamicAdapt } from "./lib/dynamicAdapt.js";
import { initHeader } from "./lib/header.js";
import { initSliders } from "./lib/slider.js";
import { hasErrors } from "./lib/forms.js";
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.addEventListener("DOMContentLoaded", app);

function app() {
   // - - - - - - - [app {START}] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   consoleInfo();
   initHeader();
   useDynamicAdapt("max");
   isWebp();
   initSliders();

   // forms validation
   const connetForm = document.querySelector(".form-connect__body");
   connetForm.addEventListener("submit", e => {
      e.preventDefault();
      if (hasErrors(connetForm) > 0) {
         alert("Перевірте дані");
         connetForm.reset();
      } else {
         alert("Відправлено!");
      }
   });
   // - - - - - - - [app {END}] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
