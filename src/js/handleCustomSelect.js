/**
 * DOM Elements
 */
const allBtnSelect = document.querySelectorAll(".custom-select__btn-select");
const ingredientsTagsList = document.querySelector(".custom-select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".custom-select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".custom-select__tags-list--ustensils");

// TO REFACTOR
const toggleOpenCloseBtnSelect = () => {
  allBtnSelect.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tagsList = btn.nextElementSibling;
      tagsList.classList.toggle("show-grid");
      tagsList.setAttribute("aria-expanded", "true");
      if (!tagsList.classList.contains("show-grid")) {
        tagsList.setAttribute("aria-expanded", "false");
      }
      btn.classList.toggle("custom-select__btn-select--selected");
      if (ingredientsTagsList.classList.contains("show-grid")) {
        appliancesTagsList.classList.remove("show-grid");
        ustensilsTagsList.classList.remove("show-grid");
      } else if (appliancesTagsList.classList.contains("show-grid")) {
        ingredientsTagsList.classList.remove("show-grid");
        ustensilsTagsList.classList.remove("show-grid");
      } else if (ustensilsTagsList.classList.contains("show-grid")) {
        ingredientsTagsList.classList.remove("show-grid");
        appliancesTagsList.classList.remove("show-grid");
      }
    });
  });
};

// const toggleDisplayNextElt = (elt) => {
//   elt.addEventListener("click", () => {
//     const nextElt = elt.nextElementSibling;
//     nextElt.classList.toggle("show");
//   });
// };

export { toggleOpenCloseBtnSelect };
