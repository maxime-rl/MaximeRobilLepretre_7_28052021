import { createElementFactory } from "../utils/createElementFactory";
import { filteredRecipesByTags } from "../handleTags";
import { normalize } from "../utils/normalize";

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
 * Creation appliance list in select and appliance selected tags
 * @param {object} recipes
 * @returns {HTMLElement}
 */
const createDOMApplianceTagsList = (recipes) => {
  const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
  const btnsTagSelected = document.querySelector(".tags-selected-container");

  collectSortedTagsAppliances(recipes).forEach((appliance) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "appliances" }, `${appliance}`);
    appliancesTagsList.appendChild(liElt);

    liElt.addEventListener("click", () => {
      liElt.classList.replace("block", "none");

      const btnElt = createElementFactory("button", {
        class: "btn-tag-selected flex",
        "data-cat": "appliances"
      }, `${appliance}`);
      const iconCloseElt = createElementFactory("span", { class: "icon-close" });

      btnElt.appendChild(iconCloseElt);
      btnsTagSelected.appendChild(btnElt);

      filteredRecipesByTags(recipes);
    });
  });
};

/**
 * Update appliances list input search
 * @param {object} recipes
 */
const updateAppliancesList = (recipes) => {
  const searchInput = document.querySelector("#appliances-research");
  const appliancesTagsList = document.querySelector(".select__tags-list--appliances");

  searchInput.addEventListener("keyup", (e) => {
    const userInputValue = normalize(e.target.value);

    const filteredAppliances = recipes.filter((recipe) => {
      const appliance = normalize(recipe.appliance);

      return appliance.includes(userInputValue);
    });
    appliancesTagsList.innerHTML = "";
    createDOMApplianceTagsList(filteredAppliances);
  });
};

export { createDOMApplianceTagsList, updateAppliancesList };
