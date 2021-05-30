import { Recipe } from "./Recipe";

const createTagsList = (data) => {
  const tagsList = [];

  data.forEach((recipe) => {
    tagsList.push(new Recipe(
      recipe.id,
      recipe.name,
      recipe.servings,
      recipe.ingredients,
      recipe.time,
      recipe.description,
      recipe.appliance,
      recipe.ustensils
    ).createTagsListDOMElt()
    );
  });
};

export { createTagsList };
