import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { updateRecipesList } from "./mainSearch";
import { createAllTagLists } from "./tagsList";
import { handleAllSelects, listeningToDocument } from "./handleSelects";
import { handleAllTags } from "./handleTags";

createRecipesList(recipes);
updateRecipesList(recipes);
createAllTagLists(recipes);
handleAllSelects();
handleAllTags();
listeningToDocument();
