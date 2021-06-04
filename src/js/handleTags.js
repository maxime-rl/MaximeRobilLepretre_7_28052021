// import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
// const tagsListSelected = document.querySelector(".tags-selected-container");
const allBtnsTag = document.getElementsByClassName("btn-tag-selected");
const allTagsElt = document.getElementsByClassName("tag");

/**
 * show a btn tag on click in a tags list
 */
const handleSelectedTags = () => {
  allTagsElt.forEach(tagElt => {
    tagElt.addEventListener("click", () => {
      for (let i = 0; i < allBtnsTag.length; i++) {
        if ((tagElt.dataset.cat === "ingredients") && (allBtnsTag[i].dataset.cat === "ingredients") && (tagElt.textContent === allBtnsTag[i].textContent)) {
          allBtnsTag[i].classList.add("show-flex");
          allBtnsTag[i].classList.remove("hide");
        }
        if ((tagElt.dataset.cat === "appliances") && (allBtnsTag[i].dataset.cat === "appliances") && (tagElt.textContent === allBtnsTag[i].textContent)) {
          allBtnsTag[i].classList.add("show-flex");
          allBtnsTag[i].classList.remove("hide");
        }
        if ((tagElt.dataset.cat === "ustensils") && (allBtnsTag[i].dataset.cat === "ustensils") && (tagElt.textContent === allBtnsTag[i].textContent)) {
          allBtnsTag[i].classList.add("show-flex");
          allBtnsTag[i].classList.remove("hide");
        }
      }
    });
  });
};

/**
 * hide a btn tag on click
 */
const closeCurrentTag = () => {
  const allBtnsTag = document.getElementsByClassName("btn-tag-selected");

  allBtnsTag.forEach(btnTag => {
    btnTag.addEventListener("click", () => {
      if (btnTag.classList.contains("show-flex")) {
        btnTag.classList.add("hide");
        btnTag.classList.remove("show-flex");
      }
    });
  });
};

// TEST  create btns tag when click list

// const createIngredientsBtnTags = () => {
//   allTagsElt.forEach(tagElt => {
//     tagElt.addEventListener("click", () => {
//       if (tagElt.dataset.cat === "ingredients") {
//         const btnElt = createElementFactory("button", {
//           class: "btn-tag-selected show-flex",
//           "data-cat": "ingredients"
//         }, `${tagElt.textContent}`);
//         const iconCloseElt = createElementFactory("span", { class: "icon-close" });

//         btnElt.appendChild(iconCloseElt);
//         tagsListSelected.appendChild(btnElt);
//       }
//     });
//   });
// };

// const createAppliancesBtnTags = () => {
//   allTagsElt.forEach(tagElt => {
//     tagElt.addEventListener("click", () => {
//       if (tagElt.dataset.cat === "appliances") {
//         const btnElt = createElementFactory("button", {
//           class: "btn-tag-selected show-flex",
//           "data-cat": "appliances"
//         }, `${tagElt.textContent}`);
//         const iconCloseElt = createElementFactory("span", { class: "icon-close" });

//         btnElt.appendChild(iconCloseElt);
//         tagsListSelected.appendChild(btnElt);
//         console.log(btnElt);
//       }
//     });
//   });
// };

// const createUstensilsBtnTags = () => {
//   allTagsElt.forEach(tagElt => {
//     tagElt.addEventListener("click", () => {
//       if (tagElt.dataset.cat === "ustensils") {
//         const btnElt = createElementFactory("button", {
//           class: "btn-tag-selected show-flex",
//           "data-cat": "ustensils"
//         }, `${tagElt.textContent}`);
//         const iconCloseElt = createElementFactory("span", { class: "icon-close" });

//         btnElt.appendChild(iconCloseElt);
//         tagsListSelected.appendChild(btnElt);
//       }
//     });
//   });
// };

/**
 * Remove a btn tag on click  elt.remove();
 */
// const closeCurrentTag = () => {
//   allBtnsTag.forEach(btnTag => {
//     btnTag.addEventListener("click", () => {
//       btnTag.remove();
//     });
//   });
// };

const handleAllTags = () => {
  handleSelectedTags();
  closeCurrentTag();
};

export { handleAllTags };
