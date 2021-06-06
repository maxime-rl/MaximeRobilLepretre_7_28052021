import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { updateRecipesList } from "./mainSearch";
import { handleAllSelects } from "./handleSelects";

import {
  createIngredientsTagsList,
  updateIngredientsList
} from "./categoriesList/ingredientsList";

import {
  createAppliancesTagsList,
  updateAppliancesList
} from "./categoriesList/appliancesList";

import {
  createUstensilsTagsList,
  updateUstensilsList
} from "./categoriesList/ustensilsList";

import { createCategorieSelectedTags, removeCategorieSelectedTags, test } from "./handleTags";

const ingredientsDataCat = "ingredients";
const appliancesDataCat = "appliances";
const ustensilsDataCat = "ustensils";

createRecipesList(recipes);
updateRecipesList(recipes);

createIngredientsTagsList(recipes);
updateIngredientsList(recipes);

createAppliancesTagsList(recipes);
updateAppliancesList(recipes);

createUstensilsTagsList(recipes);
updateUstensilsList(recipes);

handleAllSelects();

createCategorieSelectedTags(ingredientsDataCat);
createCategorieSelectedTags(appliancesDataCat);
createCategorieSelectedTags(ustensilsDataCat);
removeCategorieSelectedTags(recipes);
test(recipes);
