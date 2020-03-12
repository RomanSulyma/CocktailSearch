import {values} from '../Base';

/**
 * Render single recipe
 *
 * @param recipe
 */
const renderRecipe = (recipe) => {

    const elem = `
                <li>
                    <a class="results__link" href="#${recipe.idDrink}">
                        <figure class="results__fig">
                            <img src="${recipe.strDrinkThumb}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.strDrink}</h4> 
                        </div>
                    </a>
                </li>`;

        document.querySelector(values.resultsList).insertAdjacentHTML('beforeend', elem);
};

/**
 * Render new recipes and clear UI
 *
 * @param recipeList
 * @param page
 * @param limit
 */
export const renderRecipeList = (recipeList, page, limit) => {

    clearSearchListUI();

    const start = (page - 1) * limit;
    const end = page * limit;
    const arrPerPage = recipeList.slice(start, end);

    arrPerPage.forEach(value => {
        renderRecipe(value);
    });
};

/**
 * Get search input from UI
 *
 * @returns {*}
 */
export const getSearchInput = () => {
    const input = document.querySelector(values.searchInput).value;
    document.querySelector(values.searchInput).value = '';
    return input;
};

/**
 * Clear input and searchList
 */
const clearSearchListUI = () => {
    document.querySelector(values.resultsList).innerHTML = '';
    document.querySelector(values.pageParent).innerHTML = '';
};

/**
 *  Toggle (show/hide) spinner
 */
export const toggleSpinner = () => {
    const loader = `<div class="${values.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div> `;

    const loaderElem = document.querySelector(values.loader);
    if(loaderElem) {
        loaderElem.parentNode.removeChild(loaderElem);
    } else {
        document.querySelector(values.resultsList).insertAdjacentHTML('afterbegin', loader);
    }
};