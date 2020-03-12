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

    let recipe = new Recipe();
    recipe.id = recipeElem.idDrink;
    recipe.strDrink = recipeElem.strDrink;
    recipe.strInstructions = recipeElem.strInstructions;
    recipe.strDrinkThumb = recipeElem.strDrinkThumb;

    let ingredients = [];

    ingredients.push(`${recipeElem.strIngredient1} ${recipeElem.strMeasure1}`);
    ingredients.push(`${recipeElem.strIngredient2} ${recipeElem.strMeasure2}`);
    ingredients.push(`${recipeElem.strIngredient3} ${recipeElem.strMeasure3}`);
    ingredients.push(`${recipeElem.strIngredient4} ${recipeElem.strMeasure4}`);
    ingredients.push(`${recipeElem.strIngredient5} ${recipeElem.strMeasure5}`);
    ingredients.push(`${recipeElem.strIngredient6} ${recipeElem.strMeasure6}`);
    ingredients.push(`${recipeElem.strIngredient7} ${recipeElem.strMeasure7}`);
    ingredients.push(`${recipeElem.strIngredient8} ${recipeElem.strMeasure8}`);
    ingredients.push(`${recipeElem.strIngredient9} ${recipeElem.strMeasure9}`);
    ingredients.push(`${recipeElem.strIngredient10} ${recipeElem.strMeasure10}`);
    ingredients.push(`${recipeElem.strIngredient11} ${recipeElem.strMeasure11}`);
    ingredients.push(`${recipeElem.strIngredient12} ${recipeElem.strMeasure12}`);
    ingredients.push(`${recipeElem.strIngredient13} ${recipeElem.strMeasure13}`);
    ingredients.push(`${recipeElem.strIngredient14} ${recipeElem.strMeasure14}`);

    recipe.ingredients = ingredients;
    return recipe;
};