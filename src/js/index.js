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
import '../css/style.css';

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

    // search elements by click on search button
    document.querySelector(values.searchButton).addEventListener('click', event => {
        event.preventDefault();
        searchController();
    });

    // change page and search elements
    document.querySelector(values.pageParent).addEventListener('click', event => {

        const pageClassName = event.target.closest(values.btnInline);
        if(pageClassName.classList.contains(values.pagePrev)) {
            paginationController(parseInt(pageView.getPageNumber()) - 1);
        }
        if(pageClassName.classList.contains(values.pageNext)) {
            paginationController(parseInt(pageView.getPageNumber()) + 1);
        }
    });

    // render recipe by click on search result
    document.querySelector(values.resultsList).addEventListener('click', event => {
        const elem = event.target.closest(values.resultListElem);
        const id = elem.getAttribute('href').replace('#','');
        window.location.hash = id;
        recipeController(id);
    });

    // add element to shopping list or to likes list
    document.querySelector(values.recipe).addEventListener('click', event => {
        if(event.target.matches(`${values.recipeBtn}, ${values.recipeBtn} *`)) {
            shoppingListControllerAdd();
        }
        if(event.target.matches(`${values.likeButton}, ${values.likeButton} *`)) {
            likesListController();
        }
    });

    // delete element from shooping list by click on delete button
    document.querySelector(values.shoppingList).addEventListener('click', event => {
        if(event.target.matches(`${values.deleteBtn}, ${values.deleteBtn} *`)) {
            shoppingListControllerDelete();
        }
    });

    // changes recipe by click on liked element
    document.querySelector(values.likesList).addEventListener('click', event => {
        event.preventDefault();
        const elem = event.target.closest(values.likeListElem).getAttribute('href');
        recipeController(elem);
    });

    // load info from local storage or hash
    window.addEventListener('load', () => {

        const likesList = JSON.parse(localStorage.getItem('likesList'));
        const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        const hash = document.location.hash.replace('#','');

        if(likesList) {
            state.likesList.list = likesList;
            likesListView.renderLikesList(state.likesList.list);
        }
        if(shoppingList) {
            state.shoppingList.list = shoppingList;
            shoppingListView.renderShoppingList(state.shoppingList.list);
        }
        if(hash) {
            recipeController(hash);
        }
    });

    // save all to localStorage if something changes
    window.addEventListener('click', () => {
        localStorage.setItem('likesList', JSON.stringify(state.likesList.list));
        localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList.list));
    });
};

init();

