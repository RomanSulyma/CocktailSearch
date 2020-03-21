import {values} from '../Base';

/**
 * Render Recipe and insert to page
 *
 * @param recipe
 */
export const renderRecipe = (recipe) => {

    const elem = `<div class="recipe__fig">
                <img src="${recipe.strDrinkThumb}" class="recipe__img img-thumbnail" style="width : 100%">
                <h4 class="recipe__title dashed-shadow">
                    <span>${recipe.strDrink}</span>
                </h4>
            </div>

            <div class="recipe__details">
                <button class="recipe__love btn btn-block btn-outline-danger btn-circle btn-xl float-right " style="margin: 10px ; width: 20%"> <i class="fas fa-heart"></i></button>
            </div>

            <div class="recipe__instructions m-2">
                    <span class="recipe__info-text">${recipe.strInstructions}</span>
            </div>
            
            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list list-unstyled row mt-3 justify-content-center align-items-center">
                
                </ul>
                
                <div class="text-center">
                <button class="btn-small btn btn-outline-primary recipe__btn">
                    <span>Add to shopping list</span>
                </button> 
                </div>
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

        const ingredient = `<li class="recipe__item list-item col col-5 border border-primary rounded m-2 py-2">
                                <div class="recipe__ingredient">
                                    <span class="recipe__unit"><i class="far fa-check-circle"></i> ${value}</span>
                                </div>
                            </li>`;

        document.querySelector(values.ingredientsList).insertAdjacentHTML("beforeend", ingredient);
    });
};

/**
 * Toggle (like/unlike) button on recipe form
 *
 * @param isLiked
 */
export const toggleButton = () => {
        const elem = document.querySelector(values.likeButton);
        elem.classList.toggle('btn-outline-danger');
        elem.classList.toggle('btn-danger');
};

export const renderButton = (isLiked) => {
    const elem = document.querySelector(values.likeButton);
    if(isLiked) {
        elem.classList.remove('btn-outline-danger');
        elem.classList.add('btn-danger');
    } else {
        elem.classList.add('btn-outline-danger');
        elem.classList.remove('btn-danger');
    }

}

/**
 * Clear Recipe
 */
export const deleteRecipe = () => {
    document.querySelector(values.recipe).innerHTML = '';
};



