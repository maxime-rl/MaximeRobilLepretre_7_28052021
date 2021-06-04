import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
const allTagsList = document.querySelectorAll(".select__tags-list");
const tagsListSelected = document.querySelector(".tags-selected-container");

/**
 * Ingredient list creation
 * @param {Array} recipes
 * @returns {HTMLElement}
 */
const createIngredientsTagsList = (recipes) => {
  allTagsList.forEach(tagsList => {
    if (tagsList.dataset.cat === "ingredients") {
      collectSortedTagsIngredients(recipes).forEach((ingredient) => {
        const liElt = createElementFactory("li", { class: "tag", "data-cat": "ingredients" }, `${ingredient}`);
        tagsList.appendChild(liElt);
      });
    }
  });
};

const createIngredientsBtnTags = (recipes) => {
  collectSortedTagsIngredients(recipes).forEach((ingredient) => {
    const btnElt = createElementFactory("button", { class: "btn-tag-selected hide", "data-cat": "ingredients" }, `${ingredient}`);
    const iconCloseElt = createElementFactory("span", { class: "icon-close" });

    btnElt.appendChild(iconCloseElt);
    tagsListSelected.appendChild(btnElt);
  });
};

const createUniqueTagsIngredientsArr = (recipes) => {
  const tagsIngredients = new Set();
  for (const recipe of recipes) {
    for (const elt of recipe.ingredients) {
      elt.ingredient = elt.ingredient.toLowerCase();
      tagsIngredients.add(elt.ingredient);
    };
  };
  return [...tagsIngredients];
};

const collectSortedTagsIngredients = (recipes) => {
  const tagsIngredients = createUniqueTagsIngredientsArr(recipes);

  return tagsIngredients.sort();
};

/**
 * Appliance list creation
 * @param {Array} recipes
 * @returns {HTMLElement}
 */
const createAppliancesTagsList = (recipes) => {
  allTagsList.forEach(tagsList => {
    if (tagsList.dataset.cat === "appliances") {
      collectSortedTagsAppliances(recipes).forEach((appliance) => {
        const liElt = createElementFactory("li", { class: "tag", "data-cat": "appliances" }, `${appliance}`);
        tagsList.appendChild(liElt);
      });
    }
  });
};

const createAppliancesBtnTags = (recipes) => {
  collectSortedTagsAppliances(recipes).forEach((appliance) => {
    const btnElt = createElementFactory("button", { class: "btn-tag-selected hide", "data-cat": "appliances" }, `${appliance}`);
    const iconCloseElt = createElementFactory("span", { class: "icon-close" });

    btnElt.appendChild(iconCloseElt);
    tagsListSelected.appendChild(btnElt);
  });
};

const createUniqueTagsAppliancesArr = (recipes) => {
  const tagsAppliances = new Set();
  for (const recipe of recipes) {
    recipe.appliance = recipe.appliance.toLowerCase();
    tagsAppliances.add(recipe.appliance);
  };
  return [...tagsAppliances];
};

const collectSortedTagsAppliances = (recipes) => {
  const tagsAppliances = createUniqueTagsAppliancesArr(recipes);

  return tagsAppliances.sort();
};

/**
 * Ustensil list creation
 * @param {Array} recipes
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

const createUstensilsBtnTags = (recipes) => {
  collectSortedTagsUstensils(recipes).forEach((ustensil) => {
    const btnElt = createElementFactory("button", { class: "btn-tag-selected hide", "data-cat": "ustensils" }, `${ustensil}`);
    const iconCloseElt = createElementFactory("span", { class: "icon-close" });

    btnElt.appendChild(iconCloseElt);
    tagsListSelected.appendChild(btnElt);
  });
};

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

const collectSortedTagsUstensils = (recipes) => {
  const tagsUstensils = createUniqueTagsUstensilsArr(recipes);

  return tagsUstensils.sort();
};

const createAllTagLists = (recipes) => {
  createAppliancesTagsList(recipes);
  createUstensilsTagsList(recipes);
  createIngredientsTagsList(recipes);
};

const createAllBtnTagsSelected = (recipes) => {
  createIngredientsBtnTags(recipes);
  createAppliancesBtnTags(recipes);
  createUstensilsBtnTags(recipes);
};

export { createAllTagLists, createAllBtnTagsSelected };
