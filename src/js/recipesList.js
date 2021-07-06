import { createElementFactory } from "./utils/createElementFactory";

/**
 * Creation DOM list of recipes
 * @param {object} data recipes
 * @returns {HTMLElement} recipes list
 */
const createDOMRecipesList = (recipes) => {
  recipes.forEach(recipe => {
    const recipesListDOMElt = document.querySelector(".recipes-list");
    const articleElt = createElementFactory("article", { class: "recipe-card" });
    const articleLink = createElementFactory("a", {
      href: "#",
      "aria-label": `Lien vers la recette ${recipe.name}`
    });
    const imgElt = createElementFactory("div", { class: "recipe-card__img" });
    const cardContentElt = createElementFactory("div", { class: "recipe-card__content" });

    const h2Elt = document.createElement("h2");
    const titleElt = createElementFactory("span", {
      class: "recipe-card__content__title"
    }, `${recipe.name}`);
    const timeContainerElt = createElementFactory("span", {}, ` ${recipe.time} min`);
    const timeIconElt = createElementFactory("img", { class: "timer-icon", src: "./img/timer.svg" });

    const descriptionElts = createElementFactory("div", { class: "recipe-card__content__description" });
    const ingredientsElt = document.createElement("ul");

    recipe.ingredients.forEach(elt => {
      const quantity = elt.quantity ? `: ${elt.quantity}` : "";
      const unit = elt.unit ? ` ${elt.unit}` : "";

      const liElt = createElementFactory("li", {}, `${quantity}` + `${unit}`);
      const strongElt = createElementFactory("strong", {}, `${elt.ingredient}`);

      liElt.insertAdjacentElement("afterbegin", strongElt);
      ingredientsElt.appendChild(liElt);
    });

    const descriptionElt = createElementFactory("p", {}, `${recipe.description}`);

    h2Elt.appendChild(titleElt);
    timeContainerElt.insertAdjacentElement("afterbegin", timeIconElt);
    h2Elt.appendChild(timeContainerElt);

    articleLink.appendChild(imgElt);

    cardContentElt.appendChild(h2Elt);

    descriptionElts.appendChild(ingredientsElt);
    descriptionElts.appendChild(descriptionElt);

    cardContentElt.appendChild(descriptionElts);
    articleLink.appendChild(cardContentElt);
    articleElt.appendChild(articleLink);

    recipesListDOMElt.appendChild(articleElt);
  });
};

export { createDOMRecipesList };
