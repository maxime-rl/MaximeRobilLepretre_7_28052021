import { createElementFactory } from "../utils/createElementFactory";
import { createCategorieSelectedTags } from "../handleTags";
import { normalize } from "../utils/normalize";

/**
 * DOM Elements
 */
const searchInput = document.querySelector("#appliances-research");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const appliancesDataCat = "appliances";

/**
 * Remove duplicates from the appliances list
 * @param {object} recipes
 * @returns {Array} appliances list
 */
const createUniqueTagsAppliancesArr = (recipes) => {
  const tagsAppliances = new Set();
  for (const recipe of recipes) {
    recipe.appliance = recipe.appliance.toLowerCase();
    tagsAppliances.add(recipe.appliance);
  };
  return [...tagsAppliances];
};

/**
 * Sort appliances
 * @param {*} recipes
 * @returns {Array} appliances list
 */
const collectSortedTagsAppliances = (recipes) => {
  const tagsAppliances = createUniqueTagsAppliancesArr(recipes);

  return tagsAppliances.sort();
};

/**
 * Creation appliance list in select
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createAppliancesTagsList = (recipes) => {
  collectSortedTagsAppliances(recipes).forEach((appliance) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "appliances" }, `${appliance}`);
    appliancesTagsList.appendChild(liElt);
  });
};

/**
 * Update appliances list input search
 * @param {object} recipes
 */
const updateAppliancesList = (recipes) => {
  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredAppliances = recipes.filter((recipe) => {
      const appliance = normalize(recipe.appliance);

      return appliance.includes(userInputValue);
    });
    appliancesTagsList.innerHTML = "";
    createAppliancesTagsList(filteredAppliances);
    createCategorieSelectedTags(appliancesDataCat);
  });
};

export { createAppliancesTagsList, updateAppliancesList };
