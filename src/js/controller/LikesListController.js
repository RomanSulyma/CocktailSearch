import * as likesListView from "../view/LikesListView";
import {toggleButton} from "../view/RecipeView";
import {state} from "../index";

export const likesListController = () => {
    //clear likesList UI
    likesListView.deleteLikesList();
    // if true add to likesList else delete from likesList
    if(state.likesList.isLiked(state.recipe)) {
        state.likesList.deleteItem(state.recipe);
    } else {
        state.likesList.addItem(state.recipe)
    }
    //renderList
    likesListView.renderLikesList(state.likesList.list);
    //render like button
    toggleButton();
};