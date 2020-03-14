import * as pageView from "../view/PageView";
import * as searchView from "../view/SearchView";
import {values} from "../Base";
import {state} from "../index";

export const paginationController = (page) => {
    //set page to state
    state.page = page;
    //changes page number
    pageView.changePageNumber(state.page);
    // clear UI
    searchView.deleteSearchList();
    // render receipts on UI
    searchView.renderRecipeList(state.recipesList, state.page, values.limit);
    // clear page buttons
    pageView.deletePageButtons();
    // render buttons
    pageView.renderPageButtons(state.page, Math.ceil(state.recipesList.length / values.limit));
};