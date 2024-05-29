const loadMemes = () => {
    const searchResults = document.querySelector('#searchResults');
    const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
    for (let meme of savedMemes){
        const memeContainer = document.createElement('div');
        memeContainer.classList.add('gridCont');

        let memeItem = document.createElement('div');
        memeItem.classList.add('gridCont__memeItem');
        memeItem.textContent = meme;

        memeContainer.appendChild(memeItem);
        searchResults.appendChild(memeContainer);
    }
    console.log(savedMemes)
}

export default loadMemes