export class Recipe {

    constructor(id, strDrink, strInstructions, strDrinkThumb, ingredients, isLiked = false) {
        this.id = id;
        this.strDrink = strDrink;
        this.strInstructions = strInstructions;
        this.strDrinkThumb = strDrinkThumb;
        this.ingredients = ingredients;
        this.isLiked = isLiked;
    }

    /**
     *  Remove null elements from ingredients list
     */
    parseIngredients () {

        this.ingredients = this.ingredients.filter( value => {
            value = value.replace(null,'').replace(null, '');

            if(!value.match(/^\s+$/)) {
                return value;
            }
        });
    }
}

/**
 * Converts model from api to Recipe
 *
 * @param recipeElem
 * @returns {Recipe}
 */
export const convertToRecipe = (recipeElem) => {

    const recipe = new Recipe();
    recipe.id = recipeElem.idDrink;
    recipe.strDrink = recipeElem.strDrink;
    recipe.strInstructions = recipeElem.strInstructions;
    recipe.strDrinkThumb = recipeElem.strDrinkThumb;

    let ingredients = [];

    ingredients.push(`${recipeElem.strMeasure1} ${recipeElem.strIngredient1}`);
    ingredients.push(`${recipeElem.strMeasure2} ${recipeElem.strIngredient2}`);
    ingredients.push(`${recipeElem.strMeasure3} ${recipeElem.strIngredient3}`);
    ingredients.push(`${recipeElem.strMeasure4} ${recipeElem.strIngredient4}`);
    ingredients.push(`${recipeElem.strMeasure5} ${recipeElem.strIngredient5}`);
    ingredients.push(`${recipeElem.strMeasure6} ${recipeElem.strIngredient6}`);
    ingredients.push(`${recipeElem.strMeasure7} ${recipeElem.strIngredient7}`);
    ingredients.push(`${recipeElem.strMeasure8} ${recipeElem.strIngredient8}`);
    ingredients.push(`${recipeElem.strMeasure9} ${recipeElem.strIngredient9}`);
    ingredients.push(`${recipeElem.strMeasure10} ${recipeElem.strIngredient10}`);
    ingredients.push(`${recipeElem.strMeasure11} ${recipeElem.strIngredient11}`);
    ingredients.push(`${recipeElem.strMeasure12} ${recipeElem.strIngredient12}`);
    ingredients.push(`${recipeElem.strMeasure13} ${recipeElem.strIngredient13}`);
    ingredients.push(`${recipeElem.strMeasure14} ${recipeElem.strIngredient14}`);

    recipe.ingredients = ingredients;
    return recipe;
};