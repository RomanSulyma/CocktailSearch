import {values} from '../Base';

/**
 * Render shopping list element and insert to page
 *
 * @param shoppingList
 */
export const renderShoppingList = (shoppingList) => {

    shoppingList.forEach(value => {

        const elem = `<div class="shopping__item list-item list-group-item-action border border-primary rounded m-2 py-2" data-item-id="${value.id}">
                        <div class="shopping__description d-inline-block ml-3 mr-3 pt-2"><span class="d-inline-block">${value.name}</span></div>
                        <button class="shopping__delete d-inline-block btn btn-outline-primary float-right mr-3"><i class="fas fa-trash-alt"></i></button>
                      </div>`;

        document.querySelector(values.shoppingList).insertAdjacentHTML('beforeend', elem);
    });
};

/**
 * Clear shopping list
 */
export const deleteShoppingList = () => {
    document.querySelector(values.shoppingList).innerHTML = '';
};


