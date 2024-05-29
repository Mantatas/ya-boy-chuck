import disableOptions from "./modules/disableOptions.js";
import generateCategories from "./modules/generateCategories.js";
import findMemes from "./modules/findMemeByCategory.js";
import findMemesByText from "./modules/findMemeByText.js";
import loadMemes from "./modules/loadSavedMemes.js";
import saveMeme from "./modules/saveMemes.js";

document.addEventListener('DOMContentLoaded', async () => {
    await generateCategories();
    disableOptions();

    document.querySelector('#searchResults').addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.classList.contains('gridCont__saveBtn')) {
            saveMeme(event);
        }
    });
});

document.querySelector('#queryForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    if (document.querySelector('#selectCategory').value === '---Choose a category---'){
        await findMemesByText();
    } else {
        await findMemes();
    }
});

document.querySelector('#jokeList').addEventListener('click', (event) => {
    event.preventDefault();
    loadMemes();
});