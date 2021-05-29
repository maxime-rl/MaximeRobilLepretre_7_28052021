import { Recipe } from "./Recipe";

const createRecipesList = (data) => {
  const recipesList = [];

  data.forEach((recipe) => {
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
