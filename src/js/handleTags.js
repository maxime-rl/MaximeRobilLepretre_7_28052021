import { createDOMRecipesList } from "./recipesList";
import { createElementFactory } from "./utils/createElementFactory";
import { handleIngredientTagsList } from "./categoriesList/ingredientsList";
import { handleApplianceTagsList } from "./categoriesList/appliancesList";
import { handleUstensilTagsList } from "./categoriesList/ustensilsList";
import { normString } from "./utils/normalize";

/**
 * DOM Elements
 */
const tagsSelectedContainer = document.querySelector(".tags-selected-container");
const allTags = document.getElementsByClassName("tag");
const recipesDOMList = document.querySelector(".recipes-list");
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

/**
 * Remove DOM recipes elements
 */
const removeDataDOMRecipes = () => {
  recipesDOMList.innerHTML = "";
  ingredientsTagsList.innerHTML = "";
  appliancesTagsList.innerHTML = "";
  ustensilsTagsList.innerHTML = "";
};

/**
 * Creation all DOM recipes elements
 * @param {object}
 */
const createDataDOMRecipes = (elt) => {
  createDOMRecipesList(elt);
  handleIngredientTagsList(elt);
  handleApplianceTagsList(elt);
  handleUstensilTagsList(elt);
};

/**
 * Detects if a tag is selected, if so, update recipes
 * @param {object} recipes
 */
const filteredRecipesByTags = (recipes) => {
  if (tagsSelectedContainer.hasChildNodes()) {
    const tagsChildren = tagsSelectedContainer.childNodes;

    tagsChildren.forEach(tagChild => {
      const tagSelectedValue = tagChild.textContent;
      const tagSelectedNormalizeValue = normString(tagSelectedValue);

      // Filtered ricipes by selected ingredient
      if (tagChild.dataset.cat === "ingredients") {
        const filteredRecipesByIngredients = recipes.filter((recipe) => {
          return recipe.ingredients.some(i => normString(i.ingredient).includes(tagSelectedNormalizeValue));
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByIngredients);
      }

      // Filtered ricipes by selected appliances
      if (tagChild.dataset.cat === "appliances") {
        const filteredRecipesByAppliance = recipes.filter((recipe) => {
          const appliance = normString(recipe.appliance);
          return appliance.includes(tagSelectedNormalizeValue);
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByAppliance);
      }

      // Filtered ricipes by selected ustensil
      if (tagChild.dataset.cat === "ustensils") {
        const filteredRecipesByUstensils = recipes.filter((recipe) => {
          return recipe.ustensils.some(u => normString(u).includes(tagSelectedNormalizeValue));
        });
        removeDataDOMRecipes();
        createDataDOMRecipes(filteredRecipesByUstensils);
      }
    });
  } else {
    // Create full recipes and all tags
    removeDataDOMRecipes();
    createDataDOMRecipes(recipes);
  };
};

/**
 * Hide tag clicked in a category list
 * @param {object} tagClicked
 */
const hideTagClickedInList = (tagClicked) => {
  const tagsSelectedContainer = document.querySelector(".tags-selected-container");
  const tagsChildren = tagsSelectedContainer.childNodes;

  for (let i = 0; i < tagsChildren.length; i++) {
    const tagSelectedValue = tagsChildren[i].textContent;
    const tagSelectedNormalizeValue = normString(tagSelectedValue);
    const currentLiElt = normString(tagClicked.textContent);

    if (tagSelectedNormalizeValue === currentLiElt) {
      tagClicked.classList.replace("block", "none");
    }
  };
};

/**
 * Creation and add message when tags list is empty
 * @param {HTMLElement}
 */
const addMessageIfTagsListIsEmpty = (tagsList) => {
  if (tagsList.querySelectorAll(".block").length < 1) {
    const liElt = createElementFactory("li", { class: "tag tag--message-empty block" }, "Aucune correspondance");

    tagsList.appendChild(liElt);
  }
};

/**
 * Remove selected tag on click and update recipes
 * @param {object} recipes
 */
const removeSelectedTags = (recipes) => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close") ||
        e.target.classList.contains("tag-selected")) {
      allTags.forEach(tag => {
        if (e.target.textContent === tag.textContent ||
            e.target.parentNode.textContent === tag.textContent) {
          tag.classList.replace("none", "block");
        }
      });
      if (e.target.classList.contains("icon-close")) {
        e.target.parentNode.remove();
        e.target.remove();
      } else if (e.target.classList.contains("tag-selected")) {
        e.target.parentNode.removeChild(e.target);
      }
      // updateRecipesList(recipes);
      filteredRecipesByTags(recipes);
    }
  });
};

export {
  removeSelectedTags,
  filteredRecipesByTags,
  hideTagClickedInList,
  addMessageIfTagsListIsEmpty
};
