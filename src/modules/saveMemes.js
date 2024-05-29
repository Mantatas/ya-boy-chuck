const saveMeme = (event) => {
    const meme = event.target.getAttribute('data-meme');
    let savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];

    if (savedMemes.includes(meme)) {
        console.log('this chuck meme has already been saved.');
    } else {
        savedMemes.push(meme);
        localStorage.setItem('savedMemes', JSON.stringify(savedMemes));
        console.log(`The following meme has been successfully saved: ${meme}`);
    }
};

export default saveMeme