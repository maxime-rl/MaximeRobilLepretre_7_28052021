import { createElementFactory } from "./createElementFactory.js";

export class Recipe {
  constructor (id, name, servings, ingredients, time, description, appliance, ustensils) {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  createRecipeDOMElt () {
    const recipesListDOMElt = document.querySelector(".recipes-list");
    const articleElt = createElementFactory("article", { class: "recipe-card" });
    const imgElt = createElementFactory("div", { class: "recipe-card__img" });
    const cardContentElt = createElementFactory("div", { class: "recipe-card__content" });

    const h2Elt = document.createElement("h2");
    const titleElt = createElementFactory("span", {}, `${this.name}`);
    const timeContainerElt = createElementFactory("span", {}, ` ${this.time} min`);
    const timeIconElt = createElementFactory("i", { class: "far fa-clock" });

    const descriptionElts = createElementFactory("div", { class: "recipe-card__content__description" });
    const ingredientsElt = document.createElement("ul");

    this.ingredients.forEach(elt => {
      const quantity = elt.quantity ? `: ${elt.quantity}` : "";
      const unit = elt.unit ? ` ${elt.unit}` : "";

      const liElt = createElementFactory("li", {}, `${quantity}` + `${unit}`);
      const strongElt = createElementFactory("strong", {}, `${elt.ingredient}`);

      liElt.insertAdjacentElement("afterbegin", strongElt);
      ingredientsElt.appendChild(liElt);
    });

    const descriptionElt = createElementFactory("p", {}, `${this.description}`);

    h2Elt.appendChild(titleElt);
    timeContainerElt.insertAdjacentElement("afterbegin", timeIconElt);
    h2Elt.appendChild(timeContainerElt);

    articleElt.appendChild(imgElt);
    cardContentElt.appendChild(h2Elt);

    descriptionElts.appendChild(ingredientsElt);
    descriptionElts.appendChild(descriptionElt);

    cardContentElt.appendChild(descriptionElts);
    articleElt.appendChild(cardContentElt);

    recipesListDOMElt.appendChild(articleElt);
  }
}
