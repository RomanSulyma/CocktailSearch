// Global app controller
import * as pageView from './view/PageView';
import * as shoppingListView from './view/ShoppingListView';
import * as likesListView from './view/LikesListView';
import {values} from './Base';
import {Recipe} from "./model/Recipe";
import {ShoppingList} from "./model/ShoppingList";
import {LikesList} from "./model/LikesList";
import {searchController} from './controller/SearchControll';
import {likesListController} from './controller/LikesListController';
import {paginationController} from './controller/PaginationController';
import {recipeController} from './controller/RecipeController';
import {shoppingListControllerAdd, shoppingListControllerDelete} from './controller/ShoppingListController';


// app info
export let state = {};
window.state = state;

/**
 * Initialize app variables and add event listeners
 */
const init = () => {
  state.likesList = new LikesList();
  state.shoppingList = new ShoppingList();
  state.recipe = new Recipe();
  state.recieptsList = [];

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

    document.querySelector(values.shoppingList).addEventListener('click', event => {
        if(event.target.matches(`${values.deleteBtn}, ${values.deleteBtn} *`)) {
            const id = event.target.closest(values.shoppingItem).getAttribute(values.dataItemId);
            shoppingListControllerDelete(state.recipe.id);
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
};

init();

