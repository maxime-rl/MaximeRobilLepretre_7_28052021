import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { createAllTagsList } from "./tagsList";
import { toggleOpenCloseBtnSelect } from "./handleCustomSelect";

const allBtnSelect = document.querySelectorAll(".custom-select__btn-select");
const allTagsList = document.querySelectorAll(".custom-select__tags-list");

createRecipesList(recipes);
createAllTagsList(recipes);
toggleOpenCloseBtnSelect();

// TEST
document.body.addEventListener("click", (e) => {
  if (!(e.target).nextElementSibling.classList.contains("show-grid")) {
    allTagsList.forEach(tagsList => {
      if (tagsList.classList.contains("show-grid")) {
        tagsList.classList.remove("show-grid");
        tagsList.setAttribute("aria-expanded", "false");
      }
    });
    allBtnSelect.forEach((btn) => {
      if (btn.classList.contains("custom-select__btn-select--selected")) {
        btn.classList.remove("custom-select__btn-select--selected");
      }
    });
  }
});
