import { createElementFactory } from "../utils/createElementFactory";
import { filteredRecipesByTags } from "../handleTags";
import { normalize } from "../utils/normalize";

/**
 * Remove duplicates from the ustensils list
 * @param {*} recipes
 * @returns {Array} ustensils list
 */
const createUniqueTagsUstensilsArr = (recipes) => {
  const tagsUstensils = new Set();
  for (const recipe of recipes) {
    for (let ustensil of recipe.ustensils) {
      ustensil = ustensil.toLowerCase();
      tagsUstensils.add(ustensil);
    };
  };
  return [...tagsUstensils];
};

/**
 * Sort ustensils
 * @param {*} recipes
 * @returns {Array} ustensils list
 */
const collectSortedTagsUstensils = (recipes) => {
  const tagsUstensils = createUniqueTagsUstensilsArr(recipes);

  return tagsUstensils.sort();
};

/**
 * Creation ustensils list and ustensil selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createDOMUstensilTagsList = (recipes) => {
  const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
  const btnsTagSelected = document.querySelector(".tags-selected-container");

  collectSortedTagsUstensils(recipes).forEach((ustensil) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "ustensils" }, `${ustensil}`);
    ustensilsTagsList.appendChild(liElt);

    liElt.addEventListener("click", () => {
      liElt.classList.replace("block", "none");

      const btnElt = createElementFactory("button", {
        class: "btn-tag-selected flex",
        "data-cat": "ustensils"
      }, `${ustensil}`);
      const iconCloseElt = createElementFactory("span", { class: "icon-close" });

      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);

      filteredRecipesByTags(recipes);
    });
  });
};

/**
 * Update ustensils list input search
 * @param {object} recipes
 */
const updateUstensilsList = (recipes) => {
  const searchInput = document.querySelector("#ustensils-research");
  const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredUstensils = recipes.filter((recipe) => {
      return recipe.ustensils.some(ustensil => normalize(ustensil).includes(userInputValue));
    });

    ustensilsTagsList.innerHTML = "";
    createDOMUstensilTagsList(filteredUstensils);
  });
};

export { createDOMUstensilTagsList, updateUstensilsList };
