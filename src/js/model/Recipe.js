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
        this.ingredients = this.ingredients.filter( value => value !== null);
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

    ingredients.push(recipeElem.strIngredient1);
    ingredients.push(recipeElem.strIngredient2);
    ingredients.push(recipeElem.strIngredient3);
    ingredients.push(recipeElem.strIngredient4);
    ingredients.push(recipeElem.strIngredient5);
    ingredients.push(recipeElem.strIngredient6);
    ingredients.push(recipeElem.strIngredient7);
    ingredients.push(recipeElem.strIngredient8);
    ingredients.push(recipeElem.strIngredient9);
    ingredients.push(recipeElem.strIngredient10);
    ingredients.push(recipeElem.strIngredient11);
    ingredients.push(recipeElem.strIngredient12);
    ingredients.push(recipeElem.strIngredient13);
    ingredients.push(recipeElem.strIngredient14);

    recipe.ingredients = ingredients;
    return recipe;
};