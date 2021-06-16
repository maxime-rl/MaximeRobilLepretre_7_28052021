import "../styles/main.scss";

import { recipes } from "./data";
import { createDOMRecipesList } from "./recipesList";
import { updateRecipesList, createAllKeywords } from "./mainSearch";
import { handleAllSelects } from "./handleSelects";

import {
  handleIngredientTagsList,
  updateIngredientsList
} from "./categoriesList/ingredientsList";

import {
  handleApplianceTagsList,
  updateAppliancesList
} from "./categoriesList/appliancesList";

import {
  handleUstensilTagsList,
  updateUstensilsList
} from "./categoriesList/ustensilsList";

import { removeSelectedTags } from "./handleTags";

// import { normString } from "./utils/normalize";

createDOMRecipesList(recipes);
createAllKeywords(recipes);
updateRecipesList(recipes);

handleIngredientTagsList(recipes);
handleApplianceTagsList(recipes);
handleUstensilTagsList(recipes);

updateIngredientsList(recipes);
updateAppliancesList(recipes);
updateUstensilsList(recipes);

removeSelectedTags(recipes);

handleAllSelects();

// const allKeywords = [];
// recipes.forEach(recipe => {
//   const name = normString(recipe.name);
//   const description = normString(recipe.description);
//   allKeywords.push(name);
//   allKeywords.push(description);

//   recipe.ingredients.forEach(elt => {
//     allKeywords.push(normString(elt.ingredient));
//   });

//   allKeywords.forEach(keyword => {
//     if (keyword.includes(userInputValue)) {
//       removeRecipeById(recipe.id);
//       mainContentElt.appendChild(createRecipeElement(recipe));
//       state.displayedRecipes.push(recipe.id);
//     } else {
//       recipesFromTitle.push(recipe);
//       removeRecipeById(recipe.id);
//     }
//   });
// });
