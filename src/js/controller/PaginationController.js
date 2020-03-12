import * as pageView from "../view/PageView";
import * as searchView from "../view/SearchView";
import {values} from "../Base";
import {state} from "../index";

export const paginationController = (page) => {
    //changes page number
    pageView.changePageNumber(page);
    // render receipts on UI
    searchView.renderRecipeList(state.recipesList, page, values.limit);
    // render buttons
    pageView.renderPageButtons(page, Math.ceil(state.recipesList.length / values.limit));
};