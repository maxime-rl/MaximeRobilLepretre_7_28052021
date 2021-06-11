import { createElementFactory } from "../utils/createElementFactory.js";
import { createCategorieSelectedTags } from "../handleTags";
import { normalize } from "../utils/normalize";
// import { recipes } from "../data";

/**
 * DOM Elements
 */
const searchInput = document.querySelector("#ingredients-research");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const ingredientsDataCat = "ingredients";

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
  // console.log(tagsIngredients.has("banane"));
  // return tagsIngredients;
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

/**
 * Creation ingredients list in select
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createIngredientsTagsList = (recipes) => {
  collectSortedTagsIngredients(recipes).forEach((ingredient) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "ingredients" }, `${ingredient}`);
    ingredientsTagsList.appendChild(liElt);
  });
};

/**
 * Update ingredients list input search
 * @param {object} recipes
 */
const updateIngredientsList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredIngredients = recipes.filter((recipe) => {
      return recipe.ingredients.some(i => normalize(i.ingredient).includes(userInputValue));
    });
    ingredientsTagsList.innerHTML = "";
    createIngredientsTagsList(filteredIngredients);
    createCategorieSelectedTags(ingredientsDataCat);
  });
};

// /**
//  * Update ingredients list input search
//  * @param {object} recipes
//  */
// const updateIngredientsList = (recipes) => {
//   searchInput.addEventListener("keyup", (e) => {
//     const userInputValue = normalize(e.target.value);

//     const filteredIngredients = collectSortedTagsIngredients(recipes).filter((ingr) => {
//       console.log(normalize(ingr).includes(userInputValue));
//       return (normalize(ingr).includes(userInputValue));
//     });
//     ingredientsTagsList.innerHTML = "";
//     createIngredientsTagsList(filteredIngredients);
//     createCategorieSelectedTags(ingredientsDataCat);
//   });
// };

export { createIngredientsTagsList, updateIngredientsList };
