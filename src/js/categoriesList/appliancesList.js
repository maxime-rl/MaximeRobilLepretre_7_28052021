import { createElementFactory } from "../utils/createElementFactory";
import { filteredRecipesByTags, hideTagClickedInList } from "../handleTags";
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
const handleApplianceTagsList = (recipes) => {
  const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
  const tagsSelectedContainer = document.querySelector(".tags-selected-container");

  collectSortedTagsAppliances(recipes).forEach((appliance) => {
    const liElt = createElementFactory("li", { class: "tag block", "data-cat": "appliances" }, `${appliance}`);
    appliancesTagsList.appendChild(liElt);

    hideTagClickedInList(liElt);

    liElt.addEventListener("click", () => {
      const tagElt = createElementFactory("button", {
        class: "tag-selected flex",
        "data-cat": "appliances"
      }, `${appliance}`);
      const iconCloseElt = createElementFactory("span", { class: "icon-close" });

      tagElt.appendChild(iconCloseElt);
      tagsSelectedContainer.appendChild(tagElt);

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

    if (userInputValue.length) {
      const filteredAppliances = recipes.filter((recipe) => {
        const appliance = normalize(recipe.appliance);

        return appliance.includes(userInputValue);
      });
      appliancesTagsList.innerHTML = "";
      handleApplianceTagsList(filteredAppliances);
    } else {
      appliancesTagsList.innerHTML = "";
      handleApplianceTagsList(recipes);
    }
  });
};

export { handleApplianceTagsList, updateAppliancesList };
