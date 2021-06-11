// import { createElementFactory } from "./utils/createElementFactory";
import { createDOMRecipesList } from "./recipesList";
import { createDOMIngredientTagsList } from "./categoriesList/ingredientsList";
import { createDOMApplianceTagsList } from "./categoriesList/appliancesList";
import { createDOMUstensilTagsList } from "./categoriesList/ustensilsList";
import { normalize } from "./utils/normalize";

/**
 * DOM Elements
 */
const btnsTagSelected = document.querySelector(".tags-selected-container");
const allTags = document.getElementsByClassName("tag");
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

const createDataDOMRecipes = (elt) => {
  createDOMRecipesList(elt);
  createDOMIngredientTagsList(elt);
  createDOMApplianceTagsList(elt);
  createDOMUstensilTagsList(elt);
};

/**
 * Detects if a tag is selected, if so, update recipes
 * @param {object} recipes
 */
const filteredRecipesByTags = (recipes) => {
  if (btnsTagSelected.hasChildNodes()) {
    const btnChildren = btnsTagSelected.childNodes;

    btnChildren.forEach(btnChild => {
      const btnValue = btnChild.textContent;
      const btnNormalizeValue = normalize(btnValue);

      const filteredRecipes = recipes.filter((recipe) => {
        const name = normalize(recipe.name);
        const appliance = normalize(recipe.appliance);
        const description = normalize(recipe.description);

        return (
          name.includes(btnNormalizeValue) ||
          appliance.includes(btnNormalizeValue) ||
          description.includes(btnNormalizeValue) ||
          recipe.ingredients.some(i => normalize(i.ingredient).includes(btnNormalizeValue)) ||
          recipe.ustensils.some(u => normalize(u).includes(btnNormalizeValue))
        );
      });
      removeDataDOMRecipes();
      createDataDOMRecipes(filteredRecipes);
    });
  } else {
    removeDataDOMRecipes();
    createDataDOMRecipes(recipes);
  };
};

/**
 * Remove selected tag on click
 */
const removeSelectedTags = (recipes) => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close") || e.target.classList.contains("btn-tag-selected")) {
      allTags.forEach(tag => {
        if ((e.target.textContent === tag.textContent) || (e.target.parentNode.textContent === tag.textContent)) {
          tag.classList.replace("none", "block");
        }
      });
      if (e.target.classList.contains("icon-close")) {
        e.target.parentNode.remove();
        e.target.remove();
      } else if (e.target.classList.contains("btn-tag-selected")) {
        e.target.parentNode.removeChild(e.target);
      }
      filteredRecipesByTags(recipes);
    }
  });
};

export { removeSelectedTags, filteredRecipesByTags };
