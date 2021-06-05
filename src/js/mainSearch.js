import { createRecipesList } from "./recipesList";
import { normalize } from "./normalize";

/**
 * DOM Elements
 */
const searchInput = document.querySelector("#search-bar");
const recipesDOMList = document.querySelector(".recipes-list");

/**
 * Main search
 * Listen and update DOM recipes list
 * @param {object} data recipes
 * @returns {HTMLElement} recipes list
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
      recipesDOMList.innerHTML = "";
      createRecipesList(filteredRecipes);
    } else {
      recipesDOMList.innerHTML = "";
      createRecipesList(recipes);
    }
  });
};

export { updateRecipesList };
