import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { updateRecipesList } from "./mainSearch";
import { handleAllSelects } from "./handleSelects";

import {
  updateIngredientsList,
  createIngredientsTagsList
} from "./categoriesList/ingredientsList";

import {
  createAppliancesTagsList,
  updateAppliancesList
} from "./categoriesList/appliancesList";

import {
  createUstensilsTagsList,
  updateUstensilsList
} from "./categoriesList/ustensilsList";

import { createCategorieSelectedTags, removeCategorieSelectedTags } from "./handleTags";

const ingredientsDataCat = "ingredients";
const appliancesDataCat = "appliances";
const ustensilsDataCat = "ustensils";

createRecipesList(recipes);
updateRecipesList(recipes);

createIngredientsTagsList(recipes);
createAppliancesTagsList(recipes);
createUstensilsTagsList(recipes);

createCategorieSelectedTags(recipes, ingredientsDataCat);
createCategorieSelectedTags(recipes, appliancesDataCat);
createCategorieSelectedTags(recipes, ustensilsDataCat);

updateIngredientsList(recipes);
updateAppliancesList(recipes);
updateUstensilsList(recipes);

// filteredRecipesByTags(recipes);

removeCategorieSelectedTags(recipes);

handleAllSelects();
