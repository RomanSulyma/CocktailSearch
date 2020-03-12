import * as shoppingListView from "../view/ShoppingListView";
import {state} from "../index";

export const shoppingListControllerAdd = () => {
    //clear shoppingList UI
    shoppingListView.deleteShoppingList();
    //add recipe to shopping list
    state.shoppingList.addItem(state.recipe);
    //renderList
    shoppingListView.renderShoppingList(state.shoppingList.list);
};

export const shoppingListControllerDelete = (id) => {
    //clear shoppingList UI
    shoppingListView.deleteShoppingList();
    //remove recipe from shopping list
    state.shoppingList.deleteItem(id);
    //renderList
    shoppingListView.renderShoppingList(state.shoppingList.list);
};