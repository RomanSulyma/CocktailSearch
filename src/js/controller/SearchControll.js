import * as pageView from "../view/PageView";
import * as searchView from "../view/SearchView";
import {values} from "../Base";
import {state} from "../index";
import {getRecipes} from "../model/Search";

export const searchController = async () => {
    //changes page number to first
    pageView.changePageNumber(1);
    // get input and clear input field
    const searchInput = searchView.getSearchInput();
    searchView.toggleSpinner();
    // get recipes list
    state.recipesList = await getRecipes(searchInput);
    // render receipts on UI
    searchView.renderRecipeList(state.recipesList, pageView.getPageNumber(), values.limit);
    // render buttons
    pageView.renderPageButtons(pageView.getPageNumber(), Math.ceil(state.recipesList.length / values.limit));
};