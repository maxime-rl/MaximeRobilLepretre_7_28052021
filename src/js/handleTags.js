import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
const btnsTagSelected = document.querySelector(".tags-selected-container");
const allTagsElt = document.getElementsByClassName("tag");

/**
 * DOM manage selected ingredients tag
 * Create or remove btn tag
 */
const createIngredientsBtnTags = () => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", () => {
      if (tagElt.dataset.cat === "ingredients") {
        const btnElt = createElementFactory("button", {
          class: "btn-tag-selected display-flex",
          "data-cat": "ingredients"
        }, `${tagElt.textContent}`);
        const iconCloseElt = createElementFactory("span", { class: "icon-close" });

        btnElt.appendChild(iconCloseElt);
        btnsTagSelected.appendChild(btnElt);

        btnElt.addEventListener("click", () => {
          btnElt.remove();
        });
      }
    });
  });
};

/**
 * DOM manage selected appliances tag
 * Create or remove btn tag
 */
const createAppliancesBtnTags = () => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", () => {
      if (tagElt.dataset.cat === "appliances") {
        const btnElt = createElementFactory("button", {
          class: "btn-tag-selected display-flex",
          "data-cat": "appliances"
        }, `${tagElt.textContent}`);
        const iconCloseElt = createElementFactory("span", { class: "icon-close" });

        btnElt.appendChild(iconCloseElt);
        btnsTagSelected.appendChild(btnElt);

        btnElt.addEventListener("click", () => {
          btnElt.remove();
        });
      }
    });
  });
};

/**
 * DOM manage selected ustensils tag
 * Create or remove btn tag
 */
const createUstensilsBtnTags = () => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", () => {
      if (tagElt.dataset.cat === "ustensils") {
        const btnElt = createElementFactory("button", {
          class: "btn-tag-selected display-flex",
          "data-cat": "ustensils"
        }, `${tagElt.textContent}`);
        const iconCloseElt = createElementFactory("span", { class: "icon-close" });

        btnElt.appendChild(iconCloseElt);
        btnsTagSelected.appendChild(btnElt);

        btnElt.addEventListener("click", () => {
          btnElt.remove();
        });
      }
    });
  });
};

const handleAllTags = () => {
  createIngredientsBtnTags();
  createAppliancesBtnTags();
  createUstensilsBtnTags();
};

export { handleAllTags };
