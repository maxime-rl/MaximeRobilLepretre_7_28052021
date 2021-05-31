import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
const allTagsList = document.querySelectorAll(".custom-select__tags-list");

/**
 * Ingredient list creation
 * @param {Array} recipes
 * @returns {HTMLElement}
 */
const createIngredientsTagsList = (recipes) => {
  allTagsList.forEach(tagsList => {
    if (tagsList.dataset.cat === "ingredients") {
      collectSortedTagsIngredients(recipes).forEach((ingredient) => {
        const liElt = createElementFactory("li", { "data-cat": "ingredients" }, `${ingredient}`);
        tagsList.appendChild(liElt);
      });
    }
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
        const liElt = createElementFactory("li", { "data-cat": "appliances" }, `${appliance}`);
        tagsList.appendChild(liElt);
      });
    }
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
      collectSortedTagsUstensils(recipes).forEach((ustensils) => {
        const liElt = createElementFactory("li", { "data-cat": "ustensils" }, `${ustensils}`);
        tagsList.appendChild(liElt);
      });
    }
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

const createAllTagsList = (recipes) => {
  createAppliancesTagsList(recipes);
  createUstensilsTagsList(recipes);
  createIngredientsTagsList(recipes);
};

export { createAllTagsList };
