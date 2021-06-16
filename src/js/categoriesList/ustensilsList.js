import { createElementFactory } from "../utils/createElementFactory";
import {
  filteredRecipesByTags,
  hideTagClickedInList,
  addMessageIfTagsListIsEmpty
} from "../handleTags";
import { normString } from "../utils/normalize";

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
const handleUstensilTagsList = (recipes) => {
  const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
  const btnsTagSelected = document.querySelector(".tags-selected-container");

  collectSortedTagsUstensils(recipes).forEach((ustensil) => {
    const liElt = createElementFactory("li", {
      class: "tag block",
      "data-cat": "ustensils",
      "tab-index": "0"
    }, `${ustensil}`);
    ustensilsTagsList.appendChild(liElt);

    hideTagClickedInList(liElt);

    liElt.addEventListener("click", () => {
      const btnElt = createElementFactory("button", {
        class: "tag-selected flex",
        "data-cat": "ustensils"
      }, `${ustensil}`);
      const iconCloseElt = createElementFactory("span", { class: "icon-close" });

      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);

      filteredRecipesByTags(recipes);
    });
  });
  addMessageIfTagsListIsEmpty(ustensilsTagsList);
};

/**
 * Update ustensils list input search
 * @param {object} recipes
 */
const updateUstensilsList = (recipes) => {
  const searchInput = document.querySelector("#ustensils-research");
  const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normString(e.target.value);

    if (userInputValue.length) {
      const filteredUstensils = recipes.filter((recipe) => {
        return recipe.ustensils.some(i => normString(i).includes(userInputValue));
      });
      ustensilsTagsList.innerHTML = "";
      handleUstensilTagsList(filteredUstensils);
    } else {
      ustensilsTagsList.innerHTML = "";
      handleUstensilTagsList(recipes);
    }
  });
};

export {
  handleUstensilTagsList,
  updateUstensilsList
};
