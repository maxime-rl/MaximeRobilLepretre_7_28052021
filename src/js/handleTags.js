// import { createElementFactory } from "./createElementFactory.js";

/**
 * DOM Elements
 */
// const tagsListSelected = document.querySelector(".tags-selected-container");
const allBtnsTag = document.getElementsByClassName("btn-tag-selected");
const allTagsElt = document.getElementsByClassName("tag");

/**
 * Display of the btn tag on click in a tags list
 */
const handleSelectedTags = () => {
  allTagsElt.forEach(tagList => {
    tagList.addEventListener("click", () => {
      const currentTag = tagList.textContent;

      for (let i = 0; i < allBtnsTag.length; i++) {
        const newBtnTag = allBtnsTag[i].textContent;

        if (currentTag === newBtnTag) {
          allBtnsTag[i].classList.add("show-flex");
          allBtnsTag[i].classList.remove("hide");
        }
      }
    });
  });
};

/**
 * Remove a btn tag on click
 */
const closeCurrentTag = () => {
  allBtnsTag.forEach(btnTag => {
    btnTag.addEventListener("click", () => {
      if (btnTag.classList.contains("show-flex")) {
        btnTag.classList.add("hide");
        btnTag.classList.remove("show-flex");
      }
    });
  });
};

const handleAllTags = () => {
  handleSelectedTags();
  closeCurrentTag();
};

export { handleAllTags };

// TEST create btns tag when click list

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
 * Remove a btn tag on click
 */
//  const closeCurrentTag = () => {
//   const allBtnsTag = document.querySelectorAll(".btn-tag-selected");

//   for (let i = 0; i < allBtnsTag.lenght; i++) {
//     console.log("test");
//     allBtnsTag[i].addEventListener("click", () => {
//       if (allBtnsTag[i].classList.contains("show-flex")) {
//         console.log(allBtnsTag[i]);
//         allBtnsTag[i].classList.contains("hide");
//       }
//     });
//   };
// };

// const createAllBtnsTag = () => {
//   createIngredientsBtnTags();
//   createAppliancesBtnTags();
//   createUstensilsBtnTags();
// };
