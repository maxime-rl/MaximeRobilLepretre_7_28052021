import { createElementFactory } from "../utils/createElementFactory.js";
import { filteredRecipesByTags } from "../handleTags";
import { normalize } from "../utils/normalize";

/**
 * Remove duplicates from the ingredients list
 * @param {*} recipes
 * @returns {Array} ingredients list
 */
const createUniqueTagsIngredientsArr = (recipes) => {
  const tagsIngredients = new Set();
  for (const recipe of recipes) {
    for (const elt of recipe.ingredients) {
      elt.ingredient = elt.ingredient.toLowerCase();
      tagsIngredients.add(elt.ingredient);
    };
  };
  return [...tagsIngredients];
};

/**
 * Sort ingredients
 * @param {*} recipes
 * @returns {Array} ingredients list
 */
const collectSortedTagsIngredients = (recipes) => {
  const tagsIngredients = createUniqueTagsIngredientsArr(recipes);

  return tagsIngredients.sort();
};

/**
 * Creation ingredients list in select and ingredient selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createDOMIngredientTagsList = (recipes) => {
  const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
  const btnsTagSelected = document.querySelector(".tags-selected-container");

  collectSortedTagsIngredients(recipes).forEach((ingredient) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "ingredients" }, `${ingredient}`);
    ingredientsTagsList.appendChild(liElt);

    liElt.addEventListener("click", () => {
      liElt.classList.replace("block", "none");

      const btnElt = createElementFactory("button", {
        class: "btn-tag-selected flex",
        "data-cat": "ingredients"
      }, `${ingredient}`);
      const iconCloseElt = createElementFactory("span", { class: "icon-close" });

      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);

      filteredRecipesByTags(recipes);
    });
  });
};

/**
 * Update ingredients list input search
 * @param {object} recipes
 */
const updateIngredientsList = (recipes) => {
  const searchInput = document.querySelector("#ingredients-research");
  const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");

  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredIngredients = recipes.filter((recipe) => {
      return recipe.ingredients.some(i => normalize(i.ingredient).includes(userInputValue));
    });
    ingredientsTagsList.innerHTML = "";
    createDOMIngredientTagsList(filteredIngredients);
  });
};

export { createDOMIngredientTagsList, updateIngredientsList };
