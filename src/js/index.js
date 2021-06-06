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

import {
  createIngredientsSelectedTags,
  createAppliancesSelectedTags,
  createUstensilsSelectedTags
} from "./handleTags";

createRecipesList(recipes);
updateRecipesList(recipes);

createIngredientsTagsList(recipes);
updateIngredientsList(recipes);

createAppliancesTagsList(recipes);
updateAppliancesList(recipes);

createUstensilsTagsList(recipes);
updateUstensilsList();

handleAllSelects();

createIngredientsSelectedTags();
createAppliancesSelectedTags();
createUstensilsSelectedTags();
