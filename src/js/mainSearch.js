import { createDOMRecipesList } from "./recipesList";
import { handleIngredientTagsList } from "./categoriesList/ingredientsList";
import { handleApplianceTagsList } from "./categoriesList/appliancesList";
import { handleUstensilTagsList } from "./categoriesList/ustensilsList";
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

// const allKeywords = new Set();
// const currentKeywords = [];
// let filterdRecipesWithKeywords = new Set();

let recipesTitleArr = [];
let recipesDescriptionArr = [];
let recipesIngredientArr = [];

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
  searchInput.addEventListener("input", (e) => {
    const userInputValue = normString(e.target.value);

    recipesTitleArr = [];
    recipesDescriptionArr = [];
    recipesIngredientArr = [];

    if (userInputValue.length > 2) {
      // Algo v2.1
      // allKeywords.forEach(keyword => {
      //   if (keyword.includes(userInputValue)) {
      //     // console.log(keyword);
      //     currentKeywords.push(keyword);
      //   }
      // });

      // recipes.forEach(recipe => {
      //   currentKeywords.forEach(keyword => {
      //     if (normString(recipe.name) === keyword ||
      //       recipe.ingredients.some(i => normString(i.ingredient).includes(keyword)) ||
      //       normString(recipe.description).includes(keyword)) {
      //       filterdRecipesWithKeywords.add(recipe);
      //     }
      //   });
      // });

      // Algo v2.2
      filteredRecipesByTitle(recipes, userInputValue);
      filteredRecipesByIngredient(recipes, userInputValue);
      filteredRecipesByDescription(recipes, userInputValue);

      // Display recipes and update tags list with keywords
      // removeDataDOMRecipes();
      // createDataDOMRecipes(filterdRecipesWithKeywords);
      // displayInfoMessage(filterdRecipesWithKeywords);
    } else {
      // Create full recipes and all tags
      // currentKeywords = [];
      // filterdRecipesWithKeywords = new Set();
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      // displayInfoMessage(recipes);

      // Delete selected tags if user restart a research
      const tagsChildren = tagsSelectedContainer.childNodes;
      tagsChildren.forEach(tagChild => {
        tagChild.remove();
      });
    }
  });
};

/**
 * For filtered recipes by title algo v2.2
 * @param {object} recipes
 * @param {string} userInputValue
 */
const filteredRecipesByTitle = (recipes, userInputValue) => {
  recipes.forEach(recipe => {
    if (normString(recipe.name).includes(userInputValue)) {
      recipesTitleArr.push(recipe);
      removeDataDOMRecipes();
      createDataDOMRecipes(recipesTitleArr);
    }
  });
};

/**
 * For filtered recipes by ingredient algo v2.2
 * @param {object} recipes
 * @param {string} userInputValue
 */
const filteredRecipesByIngredient = (recipes, userInputValue) => {
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(elt => {
      if (normString(elt.ingredient).includes(userInputValue)) {
        recipesIngredientArr.push(recipe);
        removeDataDOMRecipes();
        createDataDOMRecipes(recipesIngredientArr);
      };
    });
  });
};

/**
 * For filtered recipes by description algo v2.2
 * @param {object} recipes
 * @param {string} userInputValue
 */
const filteredRecipesByDescription = (recipes, userInputValue) => {
  recipes.forEach(recipe => {
    if (normString(recipe.description).includes(userInputValue)) {
      recipesDescriptionArr.push(recipe);
      removeDataDOMRecipes();
      createDataDOMRecipes(recipesDescriptionArr);
    }
  });
};

// /**
//  * For main search algo v2.1
//  * Creation of keywords in array with all name, description and ingredients recipes
//  * @param {object} data recipes
//  * @returns {Array}
//  */
// const createAllKeywordsForMainSearch = (recipes) => {
//   recipes.forEach(recipe => {
//     const name = normString(recipe.name);
//     const description = normString(recipe.description);
//     allKeywords.add(name);
//     allKeywords.add(description);

//     recipe.ingredients.forEach(elt => {
//       allKeywords.add(normString(elt.ingredient));
//     });
//   });
// };

/**
 * Display a message if the search does not return any recipe
 * @param {object} filteredElt
 */
// const displayInfoMessage = (filteredElt) => {
//   // const recipesListDOMElt = document.querySelector(".recipes-list");
//   const infoMessageContainer = document.querySelector(".info-message-container");
//   if (!filteredElt.length) {
//     const messageElt = createElementFactory("p", { class: "info-message" });
//     infoMessageContainer.innerHTML = "";
//     infoMessageContainer.classList.replace("none", "block");
//     messageElt.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
//     infoMessageContainer.append(messageElt);
//   } else {
//     infoMessageContainer.innerHTML = "";
//     infoMessageContainer.classList.replace("block", "none");
//     recipesDOMList.innerHTML = "";
//     createDOMRecipesList(filteredElt);
//   }
// };

export { updateRecipesList };
