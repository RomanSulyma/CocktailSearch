// Global app controller
import {getReciepts, getSingleRecieptInfo} from './model/Search';
import * as searchView from './view/SearchView';
import * as pageView from './view/PageView';
import * as recipeView from './view/RecipeView';
import * as shoppingListView from './view/ShoppingListView';
import * as likesListView from './view/LikesListView';
import {values} from './Base';
import {convertToRecipe} from "./model/Recipe";
import {ShoppingList} from "./model/ShoppingList";
import {LikesList} from "./model/LikesList";

// app info
export let state = {};
window.state = state;

const searchController = async () => {

     //changes page number to first
     pageView.changePageNumber(1);
     // get input and clear input field
     state.searchInput = searchView.getSearchInput();
     searchView.toggleSpinner();
     // get reciepts list
     state.recieptsList = await getReciepts(state.searchInput);
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

const recipeController = async (id) => {

    recipeView.clearRecipe();
    //get recipe from page and convert
    let recipeElem = await getSingleRecieptInfo(id);
    let recipe = convertToRecipe(recipeElem);
    //save to state
    state.recipe = recipe;
    // render on UI
    recipeView.renderRecipe(state.recipe);
    //Parse ingridients
    recipe.parseIngridients();
    // Render ingridients on UI
    recipeView.renderIngridients(state.recipe.ingridients);
};

const shoppingListControllerAdd = () => {
    if(!state.shoppingList) {
        state.shoppingList = new ShoppingList();
    }
    //clear shoopingList UI
    shoppingListView.deleteShoppingList();
    //add reciept to shopping list
    state.shoppingList.addItem(state.recipe.ingridients);
    //renderList
    shoppingListView.renderShoppingList(state.shoppingList.list);
};

const shoppingListControllerDelete = (id) => {
    //clear shoopingList UI
    shoppingListView.deleteShoppingList();
    //remove reciept from shopping list
    state.shoppingList.deleteItem(id);
    //renderList
    shoppingListView.renderShoppingList(state.shoppingList.list);
};

const likesListController = () => {
    if(!state.likesList) {
        state.likesList = new LikesList();
    }
    //clear shoopingList UI
    likesListView.deleteLikesList();
    // if true add to likesList
    console.log(state.likesList.isLiked(state.recipe));
    if(state.likesList.isLiked(state.recipe)) {
        state.likesList.deleteItem(state.recipe);
    } else {
        state.likesList.addItem(state.recipe)
    }
    //toggle button
    console.log(state.likesList.isLiked(state.recipe));
    likesListView.toggleButton(state.likesList.isLiked(state.recipe));
    //renderList
    likesListView.renderLikesList(state.likesList.list);
};

document.querySelector(values.searchButton).addEventListener('click', event => {
    event.preventDefault();
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

document.querySelector(values.resultsList).addEventListener('click', event => {

    const elem = event.target.closest(values.resultListElem);
    const id = elem.getAttribute('href').replace('#','');

    recipeController(id);
});

document.querySelector(values.recipe).addEventListener('click', event => {
    if(event.target.matches(`${values.recipeBtn}, ${values.recipeBtn} *`)) {
        shoppingListControllerAdd();
    }
    if(event.target.matches(`${values.likeButton}, ${values.likeButton} *`)) {
        likesListController();
    }
});

document.querySelector(values.shoopingList).addEventListener('click', event => {
    if(event.target.matches(`${values.deleteBtn}, ${values.deleteBtn} *`)) {
        const id = event.target.closest(values.shoppingItem).getAttribute('data-item-id');
        console.log(id);
        shoppingListControllerDelete(id);
    }
});
