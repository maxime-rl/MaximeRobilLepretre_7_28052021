import { createElementFactory } from "./utils/createElementFactory";
// import { createRecipesList } from "./recipesList";
// import { createIngredientsTagsList } from "./categoriesList/ingredientsList";
// import { createAppliancesTagsList } from "./categoriesList/appliancesList";
// import { createUstensilsTagsList } from "./categoriesList/ustensilsList";
// import { normalize } from "./utils/normalize";

/**
 * DOM Elements
 */
const btnsTagSelected = document.querySelector(".tags-selected-container");
const allTags = document.getElementsByClassName("tag");
// const recipesDOMList = document.querySelector(".recipes-list");
// const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
// const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
// const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

// const removeDataDOMRecipes = () => {
//   recipesDOMList.innerHTML = "";
//   ingredientsTagsList.innerHTML = "";
//   appliancesTagsList.innerHTML = "";
//   ustensilsTagsList.innerHTML = "";
// };

// const ingredientsDataCat = "ingredients";
// const appliancesDataCat = "appliances";
// const ustensilsDataCat = "ustensils";

// const createDataDOMRecipes = (elt) => {
//   createRecipesList(elt);
//   createIngredientsTagsList(elt);
//   createAppliancesTagsList(elt);
//   createUstensilsTagsList(elt);
// };

// const createAllCategoriesSelectedTags = (recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat) => {
//   createCategorieSelectedTags(recipes, ingredientsDataCat);
//   createCategorieSelectedTags(recipes, appliancesDataCat);
//   createCategorieSelectedTags(recipes, ustensilsDataCat);
// };

/**
 * Create a selected btn tag and update list of recipes each time tag is clicked
 * @param {object} _recipes
 * @param {string} categorieElt
 */
const createCategorieSelectedTags = (_recipes, categorieElt) => {
  allTags.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.classList.replace("block", "none");
      // console.log(tag);
      console.log(tag);

      createBtnSelectedTag(tag, categorieElt);
      // filteredRecipesByTags(recipes);
    });
  });
};

/**
 * Create DOM btn selected tag
 * @param {HTMLElement} tag
 * @param {string} categorieElt
 */
const createBtnSelectedTag = (tag, categorieElt) => {
  if (tag.dataset.cat === `${categorieElt}`) {
    const btnElt = createElementFactory("button", {
      class: "btn-tag-selected flex",
      "data-cat": `${categorieElt}`
    }, `${tag.textContent}`);
    const iconCloseElt = createElementFactory("span", { class: "icon-close" });

    btnElt.appendChild(iconCloseElt);
    btnsTagSelected.appendChild(btnElt);
  };
};

// /**CREATE BUG IN TAGS LIST
//  * Detects if a tag is selected, if so, update recipes
//  * @param {object} recipes
//  */
// const filteredRecipesByTags = (recipes) => {
//   if (btnsTagSelected.hasChildNodes()) {
//     const btnChildren = btnsTagSelected.childNodes;

//     btnChildren.forEach(btnChild => {
//       const btnValue = btnChild.textContent;
//       const btnNormalizeValue = normalize(btnValue);

//       const filteredRecipes = recipes.filter((recipe) => {
//         const name = normalize(recipe.name);
//         const appliance = normalize(recipe.appliance);
//         const description = normalize(recipe.description);

//         return (
//           name.includes(btnNormalizeValue) ||
//           appliance.includes(btnNormalizeValue) ||
//           description.includes(btnNormalizeValue) ||
//           recipe.ingredients.some(i => normalize(i.ingredient).includes(btnNormalizeValue)) ||
//           recipe.ustensils.some(u => normalize(u).includes(btnNormalizeValue))
//         );
//       });
//       removeDataDOMRecipes();
//       createDataDOMRecipes(filteredRecipes);
//       createAllCategoriesSelectedTags(recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat);
//     });
//   } else {
//     removeDataDOMRecipes();
//     createDataDOMRecipes(recipes);
//     createAllCategoriesSelectedTags(recipes, ingredientsDataCat, appliancesDataCat, ustensilsDataCat);
//   };
// };

/**
 * Remove selected tag on click
 */
const removeCategorieSelectedTags = () => {
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
    }
  });
};

export { createCategorieSelectedTags, removeCategorieSelectedTags };
