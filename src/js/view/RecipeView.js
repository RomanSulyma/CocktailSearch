import {values} from '../Base';

/**
 * Render Recipe and insert to page
 *
 * @param recipe
 */
export const renderRecipe = (recipe) => {

    const elem = `<figure class="recipe__fig">
                <img src="${recipe.strDrinkThumb}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.strDrink}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="${recipe.strDrinkThumb}"></use>
                    </svg>
                </div>
              
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="${recipe.strDrinkThumb}"></use>
                    </svg>
                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>
            
                <div class="recipe__instructions">
                    <span class="recipe__info-text"> ${recipe.strInstructions}</span>
                </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>`;

    document.querySelector(values.recipe).insertAdjacentHTML('beforeend', elem);
};

/**
 * Render ingredients on Recipe model
 *
 * @param recipe
 */
export const renderIngredients = (recipe) => {

    recipe.ingredients.forEach(value => {

        const ingredient = `
                        <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">${value}</span>
                        </div>
                    </li>`;

        document.querySelector(values.ingredientsList).insertAdjacentHTML("beforeend", ingredient);
    });
};

/**
 * Clear Recipe
 */
export const clearRecipe = () => {
    document.querySelector(values.recipe).innerHTML = '';
};



