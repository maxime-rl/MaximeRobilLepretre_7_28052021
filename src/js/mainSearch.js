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
const ingredientsDataCat = "ingredients";
const appliancesDataCat = "appliances";
const ustensilsDataCat = "ustensils";

const removeDataDOMRecipes = () => {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};

const createDataDOMRecipes = (filteredelt) => {
  createRecipesList(filteredelt);
  createIngredientsTagsList(filteredelt);
  createAppliancesTagsList(filteredelt);
  createUstensilsTagsList(filteredelt);
};

const createAllCategoriesSelectedTags = (recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat) => {
  createCategorieSelectedTags(recipes, ingredientsDataCat);
  createCategorieSelectedTags(recipes, appliancesDataCat);
  createCategorieSelectedTags(recipes, ustensilsDataCat);
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
        const description = normalize(recipe.description);

        return (
          name.includes(userInputValue) ||
          description.includes(userInputValue) ||
          recipe.ingredients.some(i => normalize(i.ingredient).includes(userInputValue))
        );
      });
      // Filtered recipes and update tags list
      removeDataDOMRecipes();
      createDataDOMRecipes(filteredRecipes);
      createAllCategoriesSelectedTags(recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat);
      // Create full recipes and all tags
    } else {
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      createAllCategoriesSelectedTags(recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat);
    }
  });
};

export { updateRecipesList };
