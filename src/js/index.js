import "../styles/main.scss";

import { recipes } from "./data";
import { createDOMRecipesList } from "./recipesList";
import { updateRecipesList } from "./mainSearch";
import { handleAllSelects } from "./handleSelects";

import {
  updateIngredientsList,
  createDOMIngredientTagsList
} from "./categoriesList/ingredientsList";

import {
  createDOMApplianceTagsList,
  updateAppliancesList
} from "./categoriesList/appliancesList";

import {
  createDOMUstensilTagsList,
  updateUstensilsList
} from "./categoriesList/ustensilsList";

import { removeSelectedTags } from "./handleTags";

createDOMRecipesList(recipes);
updateRecipesList(recipes);

createDOMIngredientTagsList(recipes);
createDOMApplianceTagsList(recipes);
createDOMUstensilTagsList(recipes);

updateIngredientsList(recipes);
updateAppliancesList(recipes);
updateUstensilsList(recipes);

removeSelectedTags(recipes);

handleAllSelects();
