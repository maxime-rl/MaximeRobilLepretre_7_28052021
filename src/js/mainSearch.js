import { createDOMRecipesList } from "./recipesList";
import { createDOMIngredientTagsList } from "./categoriesList/ingredientsList";
import { createDOMApplianceTagsList } from "./categoriesList/appliancesList";
import { createDOMUstensilTagsList } from "./categoriesList/ustensilsList";
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

const createDataDOMRecipes = (filteredelt) => {
  createDOMRecipesList(filteredelt);
  createDOMIngredientTagsList(filteredelt);
  createDOMApplianceTagsList(filteredelt);
  createDOMUstensilTagsList(filteredelt);
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
      // Create full recipes and all tags
    } else {
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
    }
  });
};

export { updateRecipesList };
