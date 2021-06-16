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

const allKeywords = [];
const currentKeywords = [];
const filterdRecipes = [];

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

    if (userInputValue.length > 2) {
      allKeywords.forEach(keyword => {
        if (keyword.includes(userInputValue)) {
          currentKeywords.push(keyword);
        }
      });
      recipes.forEach(recipe => {
        currentKeywords.forEach(currentKeyword => {
          if (currentKeyword === normString(recipe.name) ||
            currentKeyword.includes(normString(recipe.description))) {
            filterdRecipes.push(recipe);
            // Display recipes and update tags list with keywords
            removeDataDOMRecipes();
            createDataDOMRecipes(filterdRecipes);
            displayInfoMessage(filterdRecipes);
          }
        });
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

const createAllKeywords = (recipes) => {
  recipes.forEach(recipe => {
    const name = normString(recipe.name);
    const description = normString(recipe.description);
    allKeywords.push(name);
    allKeywords.push(description);

    recipe.ingredients.forEach(elt => {
      allKeywords.push(normString(elt.ingredient));
    });
  });
};

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

export { updateRecipesList, createAllKeywords };
