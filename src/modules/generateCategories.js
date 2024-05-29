const generateCategories = async () => {
    try{
        const url = 'https://api.chucknorris.io/jokes/categories';
        const categoryInput = document.querySelector('#selectCategory');

        const response = await fetch(url);
        const data = await response.json();

        const emptyCategoryOption = document.createElement('option');
        emptyCategoryOption.textContent = '---Choose a category---'
        categoryInput.appendChild(emptyCategoryOption);

        for(let category of data){
            const categoryOption = document.createElement('option');
            categoryOption.textContent = category;
            categoryInput.appendChild(categoryOption);
        }
    } catch (error) {
        console.log('no categories to be found.')
    }
}
export default generateCategories