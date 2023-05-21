const formValidation = {
   // - - - - - - - [if errors > 1 -> error] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   hasErrors(form) {
      form.addEventListener("focusin", e => {
         const targetElement = e.target;
         if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
            formValidation.removeError(targetElement);
         }
      });
      const formRequiredItems = form.querySelectorAll("*[data-required]");
      if (formRequiredItems.length) {
         let error = 0;
         formRequiredItems.forEach(formRequiredItem => {
            if (formRequiredItem.dataset.required === "email") {
               if (!formValidation.emailTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "checkbox") {
               if (!formRequiredItem.checked) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "tel") {
               if (!formValidation.telTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "en|ru|ua") {
               if (!formValidation.nameTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "num") {
               if (!formValidation.numTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "minmax") {
               if (!formValidation.minmax(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === "file" && formRequiredItem.value !== "") {
               if (!formValidation.fileUpload(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.value === "") {
               formValidation.addError(formRequiredItem);
               error++;
            }
         });
         return error;
      }
   },

   // - - - - - - - [add text and visual errors] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   addError(formRequiredItem) {
      formRequiredItem.classList.add("_form-error");
      formRequiredItem.parentElement.classList.add("_form-error");
   },
   // - - - - - - - [add text and visual errors] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   removeError(formRequiredItem) {
      formRequiredItem.classList.remove("_form-error");
      formRequiredItem.parentElement.classList.remove("_form-error");
   },
   // - - - - - - -[form validation tests] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   emailTest(formRequiredItem) {
      //eslint-disable-next-line
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
   },
   telTest(formRequiredItem) {
      //eslint-disable-next-line
      return /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(formRequiredItem.value);
   },
   nameTest(formRequiredItem) {
      return /^([А-Яа-яЪъЁёЫыэЭ\s]+|[a-zA-Z\s]+|[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\s]+)$/.test(formRequiredItem.value);
   },
   numTest(formRequiredItem) {
      return /^[0-9]*$/.test(formRequiredItem.value);
   },
   minmax(formRequiredItem) {
      if (formRequiredItem.value.length > 5 && formRequiredItem.value.length < 10) {
         return true;
      }
      return false;
   },
};
export const hasErrors = formValidation.hasErrors;
