import "../styles/main.scss";

import { data } from "./data";
import { createRecipesList } from "./recipesList";
import { createTagsList } from "./tagsList";

createRecipesList(data);
createTagsList(data);

const recipeCard = document.querySelectorAll(".recipe-card");
console.log(recipeCard);
