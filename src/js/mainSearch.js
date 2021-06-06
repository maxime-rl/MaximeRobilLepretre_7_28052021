import { createRecipesList } from "./recipesList";
import { createIngredientsTagsList } from "./categoriesList/ingredientsList";
import { createAppliancesTagsList } from "./categoriesList/appliancesList";
import { createUstensilsTagsList } from "./categoriesList/ustensilsList";
import { createCategorieSelectedTags } from "./handleTags";

import { normalize } from "./utils/normalize";

/**
 * DOM Elements
 */
const searchInput = document.querySelector("#search-bar");
const recipesDOMList = document.querySelector(".recipes-list");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

const removeDataDOMRecipes = () => {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};

const ingredientsDataCat = "ingredients";
const appliancesDataCat = "appliances";
const ustensilsDataCat = "ustensils";

const createDataDOMRecipes = (filteredelt) => {
  createRecipesList(filteredelt);
  createIngredientsTagsList(filteredelt);
  createAppliancesTagsList(filteredelt);
  createUstensilsTagsList(filteredelt);
};

/**
 * Main search
 * Listen and update recipes DOM elts
 * @param {object} data recipes
 * @returns {HTMLElement}
 */
const updateRecipesList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    if (userInputValue.length > 2) {
      const filteredRecipes = recipes.filter((recipe) => {
        const name = normalize(recipe.name);
        const appliance = normalize(recipe.appliance);
        const description = normalize(recipe.description);

        return (
          name.includes(userInputValue) ||
          appliance.includes(userInputValue) ||
          description.includes(userInputValue) ||
          recipe.ingredients.some(i => normalize(i.ingredient).includes(userInputValue)) ||
          recipe.ustensils.some(u => normalize(u).includes(userInputValue))
        );
      });
      removeDataDOMRecipes();
      createDataDOMRecipes(filteredRecipes);
      createCategorieSelectedTags(ingredientsDataCat);
      createCategorieSelectedTags(appliancesDataCat);
      createCategorieSelectedTags(ustensilsDataCat);
    } else {
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      createCategorieSelectedTags(ingredientsDataCat);
      createCategorieSelectedTags(appliancesDataCat);
      createCategorieSelectedTags(ustensilsDataCat);
    }
  });
};

export { updateRecipesList };
