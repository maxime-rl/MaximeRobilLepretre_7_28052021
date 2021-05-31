import { Recipe } from "./Recipe";

const createRecipesList = (recipes) => {
  const recipesList = [];

  recipes.forEach((recipe) => {
    recipesList.push(new Recipe(
      recipe.id,
      recipe.name,
      recipe.servings,
      recipe.ingredients,
      recipe.time,
      recipe.description,
      recipe.appliance,
      recipe.ustensils
    ).createRecipeDOMElt()
    );
  });
};

export { createRecipesList };
