import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { createAllTagsList } from "./tagsList";
import { handleAllSelect, listeningToDocument } from "./handleCustomSelect";

createRecipesList(recipes);
createAllTagsList(recipes);
handleAllSelect();
listeningToDocument();
