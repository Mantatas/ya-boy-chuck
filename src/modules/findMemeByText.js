const findMemesByText = async () => {
    try {
        const textInput = document.querySelector('#textInput').value;
        const url = `https://api.chucknorris.io/jokes/search?query=${textInput}`;
        const searchResults = document.querySelector('#searchResults');

        const response = await fetch(url);
        const data = await response.json();
        const deconstructedData = data.result;

        console.log(data);
        console.log(data.total);
        console.log(deconstructedData[5]);

        const randomMeme = deconstructedData[Math.floor(Math.random() * (data.total - 1))].value;

        const memeContainer = document.createElement('div');
        memeContainer.classList.add('gridCont');
        memeContainer.setAttribute('data-meme', randomMeme);

        let memeItem = document.createElement('div');
        memeItem.classList.add('gridCont__memeItem');
        memeItem.textContent = randomMeme;

        const saveMemeBtn = document.createElement('button');
        saveMemeBtn.textContent = 'Save this fantastic meme';
        saveMemeBtn.classList.add('gridCont__saveBtn', 'btn', 'btn-primary', 'p-1');
        saveMemeBtn.setAttribute('data-meme', randomMeme);

        memeContainer.appendChild(memeItem);
        memeContainer.appendChild(saveMemeBtn);
        searchResults.appendChild(memeContainer);
    } catch (error) {
        console.log(error);
    }
};

export default findMemesByText;