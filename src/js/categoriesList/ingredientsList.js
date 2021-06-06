import { createElementFactory } from "../utils/createElementFactory.js";
import { createIngredientsSelectedTags } from "../handleTags";
import { normalize } from "../utils/normalize";

/**
 * DOM Elements
 */
const allTagsList = document.querySelectorAll(".select__tags-list");
const searchInput = document.querySelector("#ingredients-research");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");

const updateIngredientsList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredIngredients = recipes.filter((recipe) => {
      return recipe.ingredients.some(u => normalize(u).includes(userInputValue));
    });
    ingredientsTagsList.innerHTML = "";
    createIngredientsTagsList(filteredIngredients);
    createIngredientsSelectedTags();
  });
};

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
 * Sort ingredients
 * @param {*} recipes
 * @returns {Array} ingredients list
 */
const collectSortedTagsIngredients = (recipes) => {
  const tagsIngredients = createUniqueTagsIngredientsArr(recipes);

  return tagsIngredients.sort();
};

export { createIngredientsTagsList, updateIngredientsList };
