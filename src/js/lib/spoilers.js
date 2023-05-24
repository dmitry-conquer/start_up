const spoilers = {
   spoiler() {
      document.addEventListener("click", function (e) {
         const spoilerTrigger = e.target.closest("[data-spoiler]");
         if (spoilerTrigger) {
            const spoilerData = spoilerTrigger.dataset.spoiler;
            if (!spoilerData || window.innerWidth <= spoilerData) {
               spoilers.openSpoiler(spoilerTrigger);
            }
         }
      });
   },

   openSpoiler(spoilerTrigger) {
      const spoilerTriggerParent = spoilerTrigger.parentElement;
      const spoilerContent = spoilerTrigger.nextElementSibling;
      spoilerContent.classList.toggle("_active-spoiler-content");
      spoilerTrigger.classList.toggle("_active-spoiler");
      spoilerTriggerParent.classList.toggle("_active-spoiler-parent");
      spoilerContent.style.maxHeight = spoilerContent.style.maxHeight ? null : `${spoilerContent.scrollHeight}px`;

      spoilerTrigger.setAttribute(
         "aria-expanded",
         spoilerTrigger.getAttribute("aria-expanded") === "true" ? "false" : "true",
      );
      spoilerContent.setAttribute(
         "aria-hidden",
         spoilerContent.getAttribute("aria-hidden") === "true" ? "false" : "true",
      );
   },
};

export const initSpoiler = spoilers.spoiler;
