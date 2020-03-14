import * as pageView from "../view/PageView";
import * as searchView from "../view/SearchView";
import {values} from "../Base";
import {state} from "../index";
import {getRecipes} from "../model/Search";

export const searchController = async () => {
    // changes page number to first
    pageView.changePageNumber(1);
    // get input and clear input field
    state.searchInput = searchView.getSearchInput();
    // add spinner to search form
    searchView.toggleSpinner();
    // get recipes list
    state.recipesList = await getRecipes(state.searchInput);
    //clear UI
    searchView.deleteSearchList();
    //get page number
    state.pageNumber = pageView.getPageNumber();
    // render recipes on UI
    searchView.renderRecipeList(state.recipesList, state.pageNumber, values.limit);
    // clear page buttons
    pageView.deletePageButtons();
    // render buttons
    pageView.renderPageButtons(state.pageNumber, Math.ceil(state.recipesList.length / values.limit));
};