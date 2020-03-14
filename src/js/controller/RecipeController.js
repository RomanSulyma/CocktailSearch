import * as recipeView from "../view/RecipeView";
import {getSingleRecipeInfo} from "../model/Search";
import {convertToRecipe} from "../model/Recipe";
import {state} from "../index";

export const recipeController = async (id) => {
    //clear previous recipe
    recipeView.deleteRecipe();
    //get recipe from page and convert
    const recipeElem = await getSingleRecipeInfo(id);
    //save to state and convert to recipe
    state.recipe = convertToRecipe(recipeElem);
    // render on UI
    recipeView.renderRecipe(state.recipe);
    //toggle button
    recipeView.toggleButton(state.likesList.isLiked(state.recipe));
    //Parse ingredients
    state.recipe.parseIngredients();
    // Render ingredients on UI
    recipeView.renderIngredients(state.recipe);
    // Render Like button
    recipeView.toggleButton(state.likesList.isLiked(state.recipe));
};