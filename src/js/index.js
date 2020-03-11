// Global app controller
import {getReciepts, getSingleRecieptInfo} from './model/Search';
import * as searchView from './view/SearchView';
import * as pageView from './view/PageView';
import * as recipeView from './view/RecipeView';
import * as shoppingListView from './view/ShoppingListView';
import * as likesListView from './view/LikesListView';
import {values} from './Base';
import {convertToRecipe, Recipe} from "./model/Recipe";
import {ShoppingList} from "./model/ShoppingList";
import {LikesList} from "./model/LikesList";

// app info
export let state = {};
window.state = state;

const searchController = async () => {

     //changes page number to first
     pageView.changePageNumber(1);
     // get input and clear input field
     const searchInput = searchView.getSearchInput();
     searchView.toggleSpinner();
     // get reciepts list
     state.recieptsList = await getReciepts(searchInput);
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
    // Render Like button
    likesListView.toggleButton(state.likesList.isLiked(state.recipe));
};

const shoppingListControllerAdd = () => {
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
    //clear shoopingList UI
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

document.querySelector(values.searchButton).addEventListener('click', event => {
    event.preventDefault();
    searchController();
});

document.querySelector(values.pageParent).addEventListener('click', event => {

    const pageClassName = event.target.closest('.btn-inline');

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
        shoppingListControllerDelete(id);
    }
});

document.querySelector(values.likesList).addEventListener('click', event => {
   event.preventDefault();
   const elem = event.target.closest(values.likeListElem);
   recipeController(elem.getAttribute('href'));
});

window.addEventListener("load", event => {

    const likesList = JSON.parse(localStorage.getItem('likesList'));
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

    if(likesList) {
        state.likesList.list = likesList;
        likesListView.renderLikesList(state.likesList.list);
    }
    if(shoppingList) {
        state.shoppingList.list = shoppingList;
        shoppingListView.renderShoppingList(state.shoppingList.list);
    }
    if(window.location.hash) {
        recipeController(window.location.hash.replace('#',''));
    }
});

window.addEventListener('click', () => {
   localStorage.setItem('likesList', JSON.stringify(state.likesList.list));
   localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList.list));
});

const init = () => {
  state.likesList = new LikesList();
  state.shoppingList = new ShoppingList();
  state.recipe = new Recipe();
  state.recieptsList = [];
};

init();

