"use strict";
// > - - - - - - - - [Import] - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - -
import { consoleInfo } from "./lib/functions.js";
import { useDynamicAdapt } from "./lib/dynamicAdapt.js";
import { hasErrors } from "./lib/forms.js";

import { initHeader } from "./components/header.js";
import { initSliders } from "./components/sliders.js";
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
document.addEventListener("DOMContentLoaded", app);

function app() {
   // - - - - - - - [app {START}] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   consoleInfo();
   initHeader();
   useDynamicAdapt("max");
   initSliders();
  
   // forms validation
   const connetForm = document.querySelector(".form-connect__body");
   connetForm.addEventListener("submit", e => {
      e.preventDefault();
      if (hasErrors(connetForm) > 0) {
         alert("Перевірте дані");
      } else {
         alert("Відправлено!");
         connetForm.reset();
      }
   });
   // - - - - - - - [app {END}] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
