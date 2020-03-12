import * as likesListView from "../view/LikesListView";
import {state} from "../index";

export const likesListController = () => {
    //clear shoppingList UI
    likesListView.deleteLikesList();
    // if true add to likesList
    if(state.likesList.isLiked(state.recipe)) {
        state.likesList.deleteItem(state.recipe);
    } else {
        state.likesList.addItem(state.recipe)
    }
    //toggle button
    state.likesList.isLiked(state.recipe);
    likesListView.toggleButton(state.likesList.isLiked(state.recipe));
    //renderList
    likesListView.renderLikesList(state.likesList.list);
};