const disableOptions = () => {

    const categoryInput = document.querySelector('#selectCategory');
    const textInput = document.querySelector('#textInput');

    categoryInput.addEventListener('change', () => {
        if (categoryInput.value !== '---Choose a category---') {
            textInput.disabled = true;
        } else{
            textInput.disabled = false;
        }
    })
    
    textInput.addEventListener('input', () => {
        if (textInput.value !== ''){
            categoryInput.disabled = true;
        } else{
            categoryInput.disabled = false;
        }
    })
}

export default disableOptions