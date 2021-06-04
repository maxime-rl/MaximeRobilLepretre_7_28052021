import "../styles/main.scss";

import { recipes } from "./data";
import { createRecipesList } from "./recipesList";
import { createAllTagLists, createAllBtnTagsSelected } from "./tagsList";
import { handleAllSelects, listeningToDocument } from "./handleSelects";
import { handleAllTags } from "./handleTags";

createRecipesList(recipes);
createAllTagLists(recipes);
createAllBtnTagsSelected(recipes);
handleAllSelects();
handleAllTags();
listeningToDocument();
