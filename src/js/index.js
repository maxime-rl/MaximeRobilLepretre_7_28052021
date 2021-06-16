import "../styles/main.scss";

import { recipes } from "./data";
import { createDOMRecipesList } from "./recipesList";
import { updateRecipesList, createAllKeywordsForMainSearch } from "./mainSearch";
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

createDOMRecipesList(recipes);

// Array with keywords for main search algo v2
createAllKeywordsForMainSearch(recipes);

updateRecipesList(recipes);

handleIngredientTagsList(recipes);
handleApplianceTagsList(recipes);
handleUstensilTagsList(recipes);

updateIngredientsList(recipes);
updateAppliancesList(recipes);
updateUstensilsList(recipes);

removeSelectedTags(recipes);

handleAllSelects();
