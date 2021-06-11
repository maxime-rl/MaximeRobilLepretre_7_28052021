/**
 * DOM Elements
 */
const ingredientsSelect = document.querySelector(".select--ingredients");
const appliancesSelect = document.querySelector(".select--appliances");
const ustensilsSelect = document.querySelector(".select--ustensils");

const ingredientsBtn = document.querySelector(".select__btn--ingredients");
const appliancesBtn = document.querySelector(".select__btn--appliances");
const ustensilsBtn = document.querySelector(".select__btn--ustensils");

const ingredientsTagsList = document.querySelector(".select__tags-list--ingredients");
const appliancesTagsList = document.querySelector(".select__tags-list--appliances");
const ustensilsTagsList = document.querySelector(".select__tags-list--ustensils");

const ingredientsPlaceholderElt = document.getElementsByName("ingredients")[0];
const appliancesPlaceholderElt = document.getElementsByName("appliances")[0];
const ustensilsPlaceholderElt = document.getElementsByName("ustensils")[0];

/**
 * Management of custom select categories
 * @param {HTMLElement} btnElt
 * @param {HTMLElement} tagsListElt
 */
const handleCategoriesBtnClick = (btnElt, tagsListElt) => {
  btnElt.addEventListener("click", () => {
    tagsListElt.classList.toggle("grid");
    btnElt.classList.toggle("select__btn--selected");
    handlerForCurrentBtn(btnElt);
  });
  btnElt.previousElementSibling.addEventListener("click", () => {
    tagsListElt.classList.toggle("grid");
    btnElt.classList.toggle("select__btn--selected");
    handlerForCurrentBtn(btnElt);
  });
};

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
    ingredientsBtn.classList.remove("select__btn--selected");
    ingredientsPlaceholderElt.placeholder = "Ingredients";
    ingredientsPlaceholderElt.classList.remove("opacity-50");
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
    appliancesTagsList.classList.remove("grid");
    appliancesSelect.classList.remove("select--appliances--open");
    appliancesBtn.classList.remove("select__btn--selected");
    appliancesPlaceholderElt.placeholder = "Appareils";
    appliancesPlaceholderElt.classList.remove("opacity-50");
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
    ustensilsTagsList.classList.remove("grid");
    ustensilsSelect.classList.remove("select--ustensils--open");
    ustensilsBtn.classList.remove("select__btn--selected");
    ustensilsPlaceholderElt.placeholder = "Ustensiles";
    ustensilsPlaceholderElt.classList.remove("opacity-50");
  });
};

const listeningToDocument = () => {
  listeningDocumentForIngredients();
  listeningDocumentForAppliances();
  listeningDocumentForUstensils();
};

const handleAllSelects = () => {
  handleCategoriesBtnClick(ingredientsBtn, ingredientsTagsList);
  handleCategoriesBtnClick(appliancesBtn, appliancesTagsList);
  handleCategoriesBtnClick(ustensilsBtn, ustensilsTagsList);
  listeningToDocument();
};

export { handleAllSelects };
