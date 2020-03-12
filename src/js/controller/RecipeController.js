import * as recipeView from "../view/RecipeView";
import {getSingleRecipeInfo} from "../model/Search";
import {convertToRecipe} from "../model/Recipe";
import * as likesListView from "../view/LikesListView";
import {state} from "../index";

export const recipeController = async (id) => {
    recipeView.clearRecipe();
    //get recipe from page and convert
    let recipeElem = await getSingleRecipeInfo(id);
    let recipe = convertToRecipe(recipeElem);
    //save to state
    state.recipe = recipe;
    // render on UI
    recipeView.renderRecipe(state.recipe);
    //Parse ingredients
    recipe.parseIngredients();
    // Render ingredients on UI
    recipeView.renderIngredients(state.recipe);
    // Render Like button
    likesListView.toggleButton(state.likesList.isLiked(state.recipe));
};