// clique sur un tag d'une liste
// créer elements dans tags selected
// clique sur tag selected => supprimer le tag

/**
 * Display of the btn tag on click in a tags list
 */
const handleSelectedTags = () => {
  const allBtnsTag = document.getElementsByClassName("btn-tag-selected");
  const allTagsElt = document.getElementsByClassName("tag");

  allTagsElt.forEach(tagList => {
    tagList.addEventListener("click", () => {
      const currentTag = tagList.textContent;

      for (let i = 0; i < allBtnsTag.length; i++) {
        const newBtnTag = allBtnsTag[i].textContent.slice(0, -1);

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
  const allBtnsTag = document.getElementsByClassName("btn-tag-selected");

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
