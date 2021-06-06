import { createElementFactory } from "./utils/createElementFactory";
import { normalize } from "./utils/normalize";

import { createRecipesList } from "./recipesList";
import { createIngredientsTagsList } from "./categoriesList/ingredientsList";
import { createAppliancesTagsList } from "./categoriesList/appliancesList";
import { createUstensilsTagsList } from "./categoriesList/ustensilsList";

/**
 * DOM Elements
 */
const btnsTagSelected = document.querySelector(".tags-selected-container");
const allTagsElt = document.getElementsByClassName("tag");
// const allRecipeCardsElt = document.querySelectorAll(".recipe-card");
// const allBtnTagsElt = document.querySelector(".btn-tag-selected");

const recipesDOMList = document.querySelector(".recipes-list");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

const removeDataDOMRecipes = () => {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};

const ingredientsDataCat = "ingredients";
const appliancesDataCat = "appliances";
const ustensilsDataCat = "ustensils";

const createDataDOMRecipes = (elt) => {
  createRecipesList(elt);
  createIngredientsTagsList(elt);
  createAppliancesTagsList(elt);
  createUstensilsTagsList(elt);
};

// CODE DE BASE
const createCategorieSelectedTags = (categorieElt) => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", (e) => {
      // e.stopPropagation();
      tagElt.classList.add("display-none");
      tagElt.classList.remove("display-flex");

      if (tagElt.dataset.cat === `${categorieElt}`) {
        const btnElt = createElementFactory("button", {
          class: "btn-tag-selected display-flex",
          "data-cat": `${categorieElt}`
        }, `${tagElt.textContent}`);
        const iconCloseElt = createElementFactory("span", { class: "icon-close" });

        btnElt.appendChild(iconCloseElt);
        btnsTagSelected.appendChild(btnElt);

        btnElt.addEventListener("click", () => {
          tagElt.classList.add("display-flex");
          tagElt.classList.remove("display-none");
        });
      }
    });
  });
};

/**
 * Remove selected tag
 */
const removeCategorieSelectedTags = (recipes) => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
      e.target.parentNode.remove();
      e.target.remove();
    }
    if (e.target.classList.contains("btn-tag-selected")) {
      // const filteredRecipes = recipes.filter((recipe) => {
      //   const name = normalize(recipe.name);
      //   const appliance = normalize(recipe.appliance);
      //   const description = normalize(recipe.description);

      //   return (
      //     name.includes(e.target.textContent) ||
      //     appliance.includes(e.target.textContent) ||
      //     description.includes(e.target.textContent) ||
      //     recipe.ingredients.some(i => normalize(i.ingredient).includes(e.target.textContent)) ||
      //     recipe.ustensils.some(u => normalize(u).includes(e.target.textContent))
      //   );
      // });
      removeDataDOMRecipes();
      createDataDOMRecipes(recipes);
      createCategorieSelectedTags(ingredientsDataCat);
      createCategorieSelectedTags(appliancesDataCat);
      createCategorieSelectedTags(ustensilsDataCat);
      e.target.parentNode.removeChild(e.target);
    }
  });
};

const test = (recipes) => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", (e) => {
      // e.stopPropagation();
      const selectedAddTag = e.target.textContent;

      const filteredRecipes = recipes.filter((recipe) => {
        const name = normalize(recipe.name);
        const appliance = normalize(recipe.appliance);
        const description = normalize(recipe.description);

        return (
          name.includes(selectedAddTag) ||
          appliance.includes(selectedAddTag) ||
          description.includes(selectedAddTag) ||
          recipe.ingredients.some(i => normalize(i.ingredient).includes(selectedAddTag)) ||
          recipe.ustensils.some(u => normalize(u).includes(selectedAddTag))
        );
      });
      removeDataDOMRecipes();
      createDataDOMRecipes(filteredRecipes);
      createCategorieSelectedTags(ingredientsDataCat);
      createCategorieSelectedTags(appliancesDataCat);
      createCategorieSelectedTags(ustensilsDataCat);
    });
  });
};

export { createCategorieSelectedTags, removeCategorieSelectedTags, test };
