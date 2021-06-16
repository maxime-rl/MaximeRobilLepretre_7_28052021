/**
 * DOM Elements
 */
// All custom selects
const ingredientsSelect = document.querySelector(".select--ingredients");
const appliancesSelect = document.querySelector(".select--appliances");
const ustensilsSelect = document.querySelector(".select--ustensils");

// All btns select
const ingredientsBtn = document.querySelector(".select__tag--ingredients");
const appliancesBtn = document.querySelector(".select__tag--appliances");
const ustensilsBtn = document.querySelector(".select__tag--ustensils");

// All tag lists
const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

// All placeholder inputs
const ingredientsPlaceholderElt = document.getElementsByName("ingredients")[0];
const appliancesPlaceholderElt = document.getElementsByName("appliances")[0];
const ustensilsPlaceholderElt = document.getElementsByName("ustensils")[0];

/**
 * Handle of custom DOM select categories
 * @param {HTMLElement} btnElt
 * @param {HTMLElement} tagsListElt
 */
const handleCategoriesBtnClick = (btnElt, tagsListElt) => {
  btnElt.addEventListener("click", () => {
    tagsListElt.classList.toggle("grid");
    tagsListElt.setAttribute("aria-expanded", true);
    btnElt.classList.toggle("select__tag--selected");
    handlerForCurrentBtn(btnElt);
  });
  btnElt.previousElementSibling.addEventListener("click", () => {
    tagsListElt.classList.toggle("grid");
    tagsListElt.setAttribute("aria-expanded", true);
    btnElt.classList.toggle("select__tag--selected");
    handlerForCurrentBtn(btnElt);
  });
};

/**
 * Handle all DOM btns select
 * @param {HTMLElement} btnElt
 */
const handlerForCurrentBtn = (btnElt) => {
  if (btnElt === ingredientsBtn) {
    ingredientsSelect.classList.toggle("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    appliancesTagsList.classList.remove("grid");
    ustensilsTagsList.classList.remove("grid");
    ingredientsPlaceholderElt.placeholder = "Recherchez des ingredients";
    ingredientsPlaceholderElt.classList.toggle("opacity-50");
  } else if (btnElt === appliancesBtn) {
    appliancesSelect.classList.toggle("select--appliances--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ingredientsTagsList.classList.remove("grid");
    ustensilsTagsList.classList.remove("grid");
    appliancesPlaceholderElt.placeholder = "Recherchez des appareils";
    appliancesPlaceholderElt.classList.toggle("opacity-50");
  } else {
    ustensilsSelect.classList.toggle("select--ustensils--open");
    ingredientsSelect.classList.remove("select--ingredients--open");
    appliancesSelect.classList.remove("select--appliances--open");
    ingredientsTagsList.classList.remove("grid");
    appliancesTagsList.classList.remove("grid");
    ustensilsPlaceholderElt.placeholder = "Recherchez des ustensiles";
    ustensilsPlaceholderElt.classList.toggle("opacity-50");
  }
};

/**
 * Closing the list of ingredients when we click outside
 */
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
    ingredientsTagsList.classList.remove("grid");
    ingredientsSelect.classList.remove("select--ingredients--open");
    ingredientsBtn.classList.remove("select__tag--selected");
    ingredientsPlaceholderElt.placeholder = "Ingredients";
    ingredientsPlaceholderElt.classList.remove("opacity-50");
  });
};

/**
 * Closing the list of appliances when we click outside
 */
const listeningDocumentForAppliances = () => {
  document.addEventListener("click", (e) => {
    const appliancesElt = document.querySelector(".select--appliances--open");
    let targetElt = e.target; // clicked elt
    do {
      if (targetElt === appliancesElt) {
        return;
      }

      targetElt = targetElt.parentNode;
    } while (targetElt);

    appliancesTagsList.classList.remove("grid");
    appliancesSelect.classList.remove("select--appliances--open");
    appliancesBtn.classList.remove("select__tag--selected");
    appliancesPlaceholderElt.placeholder = "Appareils";
    appliancesPlaceholderElt.classList.remove("opacity-50");
  });
};

/**
 * Closing the list of ustensils when we click outside
 */
const listeningDocumentForUstensils = () => {
  document.addEventListener("click", (e) => {
    const ustensilsElt = document.querySelector(".select--ustensils--open");
    let targetElt = e.target; // clicked elt
    do {
      if (targetElt === ustensilsElt) {
        return;
      }

      targetElt = targetElt.parentNode;
    } while (targetElt);

    ustensilsTagsList.classList.remove("grid");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ustensilsBtn.classList.remove("select__tag--selected");
    ustensilsPlaceholderElt.placeholder = "Ustensiles";
    ustensilsPlaceholderElt.classList.remove("opacity-50");
  });
};

const listeningToDocument = () => {
  listeningDocumentForIngredients();
  listeningDocumentForAppliances();
  listeningDocumentForUstensils();
};

/**
 * Handle all selects and lists
 */
const handleAllSelects = () => {
  handleCategoriesBtnClick(ingredientsBtn, ingredientsTagsList);
  handleCategoriesBtnClick(appliancesBtn, appliancesTagsList);
  handleCategoriesBtnClick(ustensilsBtn, ustensilsTagsList);
  listeningToDocument();
};

export { handleAllSelects };
