export const initSorting = () => {
   const filterButtonParent = document.querySelector(".control-blog");
   const articles = [...document.querySelectorAll(".article-blog")];
   const articlesContainer = document.querySelector(".blog-all__body");
   const sortSelect = document.querySelector(".sort-blog__select select");
   let sortedArticles;

   function filtering(e) {
      const filterButton = e.target.closest(".control-blog__link");
      if (!filterButton) return;
      e.preventDefault();

      const currentCategory = filterButton.dataset.catagory;
      sortedArticles = articles.filter(article => {
         return currentCategory == "blog-all" || article.dataset.catContent == currentCategory;
      });
      articlesContainer.innerHTML = "";
      sortedArticles.forEach(article => {
         articlesContainer.appendChild(article);
      });
   }

   function sorting() {
      const currentValue = this.value;
      articles.sort((a, b) => {
         return currentValue == "time"
            ? timeDiff(b.dataset.date) - timeDiff(a.dataset.date)
            : timeDiff(a.dataset.date) - timeDiff(b.dataset.date);
      });
      articlesContainer.innerHTML = "";
      articles.forEach(article => {
         articlesContainer.appendChild(article);
      });
   }

   function timeDiff(date) {
      const currentDate = new Date();
      const entryDate = new Date(date);
      const diff = +currentDate - +entryDate;
      return diff;
   }

   sortSelect.addEventListener("change", sorting);
   filterButtonParent.addEventListener("click", filtering);
};
