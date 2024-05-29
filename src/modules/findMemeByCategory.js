const findMemes = async () => {
    try {
        const categorySelect = document.querySelector('#selectCategory').value;
        const url = `https://api.chucknorris.io/jokes/random?category=${categorySelect}`;
        const searchResults = document.querySelector('#searchResults');

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        console.log(data.value);

        const memeContainer = document.createElement('div');
        memeContainer.classList.add('gridCont');
        memeContainer.setAttribute('data-meme', data.value);

        let memeItem = document.createElement('div');
        memeItem.classList.add('gridCont__memeItem');
        memeItem.textContent = data.value;

        const saveMemeBtn = document.createElement('button');
        saveMemeBtn.textContent = 'Save this fantastic meme';
        saveMemeBtn.classList.add('gridCont__saveBtn', 'btn', 'btn-primary', 'p-1');
        saveMemeBtn.setAttribute('data-meme', data.value);

        memeContainer.appendChild(memeItem);
        memeContainer.appendChild(saveMemeBtn);
        searchResults.appendChild(memeContainer);
    } catch (error) {
        console.log(error);
    }
};

export default findMemes;