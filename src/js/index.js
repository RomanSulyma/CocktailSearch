// Global app controller
import {Search} from './model/Search';
import * as searchView from './view/SearchView';
import * as pageView from './view/PageView';
import {values} from './Base';

// app info
export let state = {};
window.state = state;

const searchController = async () => {
     const search = new Search();

     // get input and clear input field
     state.searchInput = searchView.getSearchInput();
     searchView.toggleSpinner();
     // get reciepts list
     state.recieptsList = await search.getReciepts(state.searchInput);
     // render receipts on UI
     searchView.renderRecieptsPagination(state.recieptsList, pageView.getPageNumber(), values.limit);
     // render buttons
     pageView.renderPageButtons(pageView.getPageNumber(), Math.ceil(state.recieptsList.length / values.limit));
 };

const paginationController = (page) => {
    //changes page number
    pageView.changePageNumber(page);
    // render receipts on UI
    searchView.renderRecieptsPagination(state.recieptsList, page, values.limit);
    // render buttons
    pageView.renderPageButtons(page, Math.ceil(state.recieptsList.length / values.limit));
};

document.querySelector(values.searchButton).addEventListener('click', () => {
    searchController();
});

document.querySelector(values.pageParent).addEventListener('click', event => {

    const pageClassName = event.target.closest('.btn-inline');
    console.log(pageClassName);

    if(pageClassName.classList.contains('results__btn--prev')) {
        paginationController(parseInt(pageView.getPageNumber()) - 1);
    }
    if(pageClassName.classList.contains('results__btn--next')) {
        paginationController(parseInt(pageView.getPageNumber()) + 1);
    }
});
