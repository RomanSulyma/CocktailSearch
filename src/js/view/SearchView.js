import {values} from '../Base';

/**
 * Render single recipe
 *
 * @param recipe
 */
const renderRecipe = (recipe) => {

    // cut element name if bigger than 20
    const elementName = recipe.strDrink.length <= 20 ? recipe.strDrink : `${recipe.strDrink.slice(0,20)}...`;

    const elem = `
                    <div class="results__link list-item list-group-item-action border border-primary rounded m-2 py-2" data-href="${recipe.idDrink}" href="#${recipe.idDrink}">
                        <img src="${recipe.strDrinkThumb}" class="img-thumbnail w-25 ml-2">
                        <div class="results__data d-inline-block ml-3">${elementName}</div>
                    </div>
               `;

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
export const deleteSearchList = () => {
    document.querySelector(values.resultsList).innerHTML = '';
    document.querySelector(values.pageParent).innerHTML = '';
};
