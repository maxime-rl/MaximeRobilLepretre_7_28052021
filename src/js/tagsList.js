import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
const allTagsList = document.querySelectorAll(".select__tags-list");

/**
 * Creation ingredients list in select
 * @param {object} recipes
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

/**
 * Remove duplicates from the ingredients list
 * @param {*} recipes
 * @returns {Array} ingredients list
 */
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

/**
 * Sorts ingredients
 * @param {*} recipes
 * @returns {Array} ingredients list
 */
const collectSortedTagsIngredients = (recipes) => {
  const tagsIngredients = createUniqueTagsIngredientsArr(recipes);

  return tagsIngredients.sort();
};

/**
 * Creation appliance list in select
 * @param {object} recipes
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

/**
 * Remove duplicates from the appliances list
 * @param {object} recipes
 * @returns {Array} appliances list
 */
const createUniqueTagsAppliancesArr = (recipes) => {
  const tagsAppliances = new Set();
  for (const recipe of recipes) {
    recipe.appliance = recipe.appliance.toLowerCase();
    tagsAppliances.add(recipe.appliance);
  };
  return [...tagsAppliances];
};

/**
 * Sorts appliances
 * @param {*} recipes
 * @returns {Array} appliances list
 */
const collectSortedTagsAppliances = (recipes) => {
  const tagsAppliances = createUniqueTagsAppliancesArr(recipes);

  return tagsAppliances.sort();
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
 * Sorts ustensils
 * @param {*} recipes
 * @returns {Array} ustensils list
 */
const collectSortedTagsUstensils = (recipes) => {
  const tagsUstensils = createUniqueTagsUstensilsArr(recipes);

  return tagsUstensils.sort();
};

const createAllTagLists = (recipes) => {
  createAppliancesTagsList(recipes);
  createUstensilsTagsList(recipes);
  createIngredientsTagsList(recipes);
};

export { createAllTagLists };
