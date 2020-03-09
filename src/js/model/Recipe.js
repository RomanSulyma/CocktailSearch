import {values} from '../Base';

export class Recipe {

    constructor(id, strDrink, strInstructions, strDrinkThumb, ingridients, isLiked) {
        this.id = id;
        this.strDrink = strDrink;
        this.strInstructions = strInstructions;
        this.strDrinkThumb = strDrinkThumb;
        this.ingridients = ingridients;
        this.isLiked = isLiked;
    }

    parseIngridients () {

        this.ingridients = this.ingridients.filter( value => {
            value = value.replace(null,'').replace(null, '');

            if(!value.match(/^\s+$/)) {
                console.log(value);
                return value;
            }
        });
    }

}

export const convertToRecipe = (recipeElem) => {

    let recipe = new Recipe();
    recipe.id = recipeElem.idDrink;
    recipe.strDrink = recipeElem.strDrink;
    recipe.strInstructions = recipeElem.strInstructions;
    recipe.strDrinkThumb = recipeElem.strDrinkThumb;

    let ingridients = [];

    ingridients.push(`${recipeElem.strIngredient1} ${recipeElem.strMeasure1}`);
    ingridients.push(`${recipeElem.strIngredient2} ${recipeElem.strMeasure2}`);
    ingridients.push(`${recipeElem.strIngredient3} ${recipeElem.strMeasure3}`);
    ingridients.push(`${recipeElem.strIngredient4} ${recipeElem.strMeasure4}`);
    ingridients.push(`${recipeElem.strIngredient5} ${recipeElem.strMeasure5}`);
    ingridients.push(`${recipeElem.strIngredient6} ${recipeElem.strMeasure6}`);
    ingridients.push(`${recipeElem.strIngredient7} ${recipeElem.strMeasure7}`);
    ingridients.push(`${recipeElem.strIngredient8} ${recipeElem.strMeasure8}`);
    ingridients.push(`${recipeElem.strIngredient9} ${recipeElem.strMeasure9}`);
    ingridients.push(`${recipeElem.strIngredient10} ${recipeElem.strMeasure10}`);
    ingridients.push(`${recipeElem.strIngredient11} ${recipeElem.strMeasure11}`);
    ingridients.push(`${recipeElem.strIngredient12} ${recipeElem.strMeasure12}`);
    ingridients.push(`${recipeElem.strIngredient13} ${recipeElem.strMeasure13}`);
    ingridients.push(`${recipeElem.strIngredient14} ${recipeElem.strMeasure14}`);

    recipe.ingridients = ingridients;

    return recipe;
};