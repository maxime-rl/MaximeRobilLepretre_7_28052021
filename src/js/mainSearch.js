import { createDOMRecipesList } from "./recipesList";
import { handleIngredientTagsList } from "./categoriesList/ingredientsList";
import { handleApplianceTagsList } from "./categoriesList/appliancesList";
import { handleUstensilTagsList } from "./categoriesList/ustensilsList";
import { createElementFactory } from "./utils/createElementFactory";
import { normString } from "./utils/normalize";

/**
 * DOM Elements
 */
const searchInput = document.querySelector("#search-bar");
const recipesDOMList = document.querySelector(".recipes-list");
const tagsSelectedContainer = document.querySelector(".tags-selected-container");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

let filteredRecipesArr = [];

/**
 * Remove DOM recipes elements
 */
const removeDataDOMRecipes = () => {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};

/**
 * Creation all DOM recipes elements
 * @param {object}
 */
const createDataDOMRecipes = (elt) => {
  createDOMRecipesList(elt);
  handleIngredientTagsList(elt);
  handleApplianceTagsList(elt);
  handleUstensilTagsList(elt);
};

/**
 * Main search algo v2
 * Listen and update recipes
 * @param {object} data recipes
 * @returns {HTMLElement}
 */
const updateRecipesList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normString(e.target.value);

    filteredRecipesArr = [];

    if (userInputValue.length > 2) {
      // Algo v2
      recipes.forEach(recipe => {
        if (normString(recipe.name).includes(userInputValue) ||
          normString(recipe.description).includes(userInputValue) ||
          recipe.ingredients.some(i => normString(i.ingredient).includes(userInputValue))) {
          filteredRecipesArr.push(recipe);
          removeDataDOMRecipes();
          createDataDOMRecipes(filteredRecipesArr);
        } else {
          displayInfoMessage(filteredRecipesArr);
          removeDataDOMRecipes();
        }
      });
    } else {
      // Create full recipes and all tags
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      displayInfoMessage(recipes);

      // Delete selected tags if user restart a research
      const tagsChildren = tagsSelectedContainer.childNodes;
      tagsChildren.forEach(tagChild => {
        tagChild.remove();
      });
    }
  });
};

/**
 * Display a message if the search does not return any recipe
 * @param {object} filteredElt
 */
const displayInfoMessage = (filteredElt) => {
  const infoMessageContainer = document.querySelector(".info-message-container");
  if (!filteredElt.length) {
    const messageElt = createElementFactory("p", { class: "info-message" });
    infoMessageContainer.innerHTML = "";
    infoMessageContainer.classList.replace("none", "block");
    messageElt.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
    infoMessageContainer.append(messageElt);
  } else {
    infoMessageContainer.innerHTML = "";
    infoMessageContainer.classList.replace("block", "none");
    recipesDOMList.innerHTML = "";
    createDOMRecipesList(filteredElt);
  }
};

export { updateRecipesList };
