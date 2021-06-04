import { Recipe } from "./Recipe";

const searchInput = document.querySelector("#search-bar");
// const recipesDOMName = document.getElementsByClassName(".recipe-card__content__title");
// const recipesDOMList = document.querySelector(".recipes-list");
// const recipeDOMElt = document.querySelector(".recipe-card");
// const allRecipesCardDOMElt = document.querySelectorAll(".recipe-card");

// const createRecipesList = (recipes) => {
//   const recipesListArr = [];

//   recipes.forEach((recipe) => {
//     recipesListArr.push(new Recipe(
//       recipe.id,
//       recipe.name,
//       recipe.servings,
//       recipe.ingredients,
//       recipe.time,
//       recipe.description,
//       recipe.appliance,
//       recipe.ustensils
//     ).createRecipeDOMElt()
//     );
//   });
// };

const createRecipesList = (recipes) => {
  const recipesListArr = [];

  for (const recipe of recipes) {
    recipe.name = recipe.name.toLowerCase();
    recipe.appliance = recipe.appliance.toLowerCase();

    for (const elt of recipe.ingredients) {
      elt.ingredient = elt.ingredient.toLowerCase();

      searchInput.addEventListener("input", () => {
        if (elt.ingredient === searchInput.value) {
          recipesListArr.push(new Recipe(
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
        }
      });
    };

    for (let ustensil of recipe.ustensils) {
      ustensil = ustensil.toLowerCase();

      searchInput.addEventListener("input", () => {
        if (ustensil === searchInput.value) {
          recipesListArr.push(new Recipe(
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
        }
      });
    };

    searchInput.addEventListener("input", () => {
      if (recipe.name === searchInput.value ||
          recipe.appliance === searchInput.value) {
        recipesListArr.push(new Recipe(
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
      }
    });
  };
};

// const linearSearch = (list, value) => {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === value) {
//       console.log("linear search : VALUE OK");
//       return list[i];
//     }
//   }
//   return -1;
// };

export { createRecipesList };
