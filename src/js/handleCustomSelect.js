/**
 * DOM Elements
 */
const ingredientsSelect = document.querySelector(".select--ingredients");
const appliancesSelect = document.querySelector(".select--appliances");
const ustensilsSelect = document.querySelector(".select--ustensils");

// const ingredientsElt = document.querySelector(".select--ingredients--open");
// const appliancesElt = document.querySelector(".select--appliances--open");
// const ustensilsElt = document.querySelector(".select--ustensils--open");

const ingredientsBtn = document.querySelector(".select__btn--ingredients");
const appliancesBtn = document.querySelector(".select__btn--appliances");
const ustensilsBtn = document.querySelector(".select__btn--ustensils");

const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

/**
 * Management of custom select categories
 * @param {HTMLElement} btnElt
 * @param {HTMLElement} tagsListElt
 */
const handleCategoriesBtnClick = (btnElt, tagsListElt) => {
  btnElt.addEventListener("click", () => {
    tagsListElt.classList.toggle("show-grid");
    btnElt.classList.toggle("select__btn--selected");
    handlerForCurrentBtn(btnElt);
  });
  btnElt.previousElementSibling.addEventListener("click", () => {
    tagsListElt.classList.toggle("show-grid");
    btnElt.classList.toggle("select__btn--selected");
    handlerForCurrentBtn(btnElt);
  });
};

const handlerForCurrentBtn = (btnElt) => {
  if (btnElt === ingredientsBtn) {
    ingredientsSelect.classList.toggle("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    appliancesTagsList.classList.remove("show-grid");
    ustensilsTagsList.classList.remove("show-grid");
  } else if (btnElt === appliancesBtn) {
    appliancesSelect.classList.toggle("select--appliances--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ingredientsTagsList.classList.remove("show-grid");
    ustensilsTagsList.classList.remove("show-grid");
  } else {
    ustensilsSelect.classList.toggle("select--ustensils--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ingredientsTagsList.classList.remove("show-grid");
    appliancesTagsList.classList.remove("show-grid");
  }
};

const listeningDocumentForIngredients = () => {
  document.addEventListener("click", (e) => {
    const ingredientsElt = document.querySelector(".select--ingredients--open");
    let targetElt = e.target; // clicked elt
    do {
      if (targetElt === ingredientsElt) {
        // Click inside
        return;
      }
      // Go up the DOM
      targetElt = targetElt.parentNode;
    } while (targetElt);
    // Click outside
    ingredientsTagsList.classList.remove("show-grid");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ingredientsBtn.classList.remove("select__btn--selected");
  });
};

const listeningDocumentForAppliances = () => {
  document.addEventListener("click", (e) => {
    const appliancesElt = document.querySelector(".select--appliances--open");
    let targetElt = e.target; // clicked elt
    do {
      if (targetElt === appliancesElt) {
        // Click inside
        return;
      }
      // Go up the DOM
      targetElt = targetElt.parentNode;
    } while (targetElt);
    // Click outside
    appliancesTagsList.classList.remove("show-grid");
    appliancesSelect.classList.remove("select--appliances--open");
    appliancesBtn.classList.remove("select__btn--selected");
  });
};

const listeningDocumentForUstensils = () => {
  document.addEventListener("click", (e) => {
    const ustensilsElt = document.querySelector(".select--ustensils--open");
    let targetElt = e.target; // clicked elt
    do {
      if (targetElt === ustensilsElt) {
        // Click inside
        return;
      }
      // Go up the DOM
      targetElt = targetElt.parentNode;
    } while (targetElt);
    // Click outside
    ustensilsTagsList.classList.remove("show-grid");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ustensilsBtn.classList.remove("select__btn--selected");
  });
};

const handleAllSelect = () => {
  handleCategoriesBtnClick(ingredientsBtn, ingredientsTagsList);
  handleCategoriesBtnClick(appliancesBtn, appliancesTagsList);
  handleCategoriesBtnClick(ustensilsBtn, ustensilsTagsList);
};

const listeningToDocument = () => {
  listeningDocumentForIngredients();
  listeningDocumentForAppliances();
  listeningDocumentForUstensils();
};

export { handleAllSelect, listeningToDocument };
