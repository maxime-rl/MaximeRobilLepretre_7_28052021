import { createElementFactory } from "../utils/createElementFactory";
import { createCategorieSelectedTags } from "../handleTags";
import { normalize } from "../utils/normalize";

/**
 * DOM Elements
 */
const allTagsList = document.querySelectorAll(".select__tags-list");
const searchInput = document.querySelector("#ustensils-research");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");
const ustensilsDataCat = "ustensils";

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
 * Creation ustensils list in select
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createUstensilsTagsList = (recipes) => {
  allTagsList.forEach(tagsList => {
    if (tagsList.dataset.cat === "ustensils") {
      collectSortedTagsUstensils(recipes).forEach((ustensil) => {
        const liElt = createElementFactory("li", { class: "tag", "data-cat": "ustensils" }, `${ustensil}`);
        tagsList.appendChild(liElt);
      });
    }
  });
};

/**
 * Update ustensils list input search
 * @param {object} recipes
 */
const updateUstensilsList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredUstensils = recipes.filter((recipe) => {
      return recipe.ustensils.some(ustensil => normalize(ustensil).includes(userInputValue));
    });

    ustensilsTagsList.innerHTML = "";
    createUstensilsTagsList(filteredUstensils);
    createCategorieSelectedTags(ustensilsDataCat);
  });
};

export { createUstensilsTagsList, updateUstensilsList };
