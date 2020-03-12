import {values} from '../Base';

/**
 * Render shopping list element and insert to page
 *
 * @param shoppingList
 */
export const renderShoppingList = (shoppingList) => {

    shoppingList.forEach(value => {

        const elem = `<li class="shopping__item" data-item-id = "${value.id}">
                    <p class="shopping__description">${value.name}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>`;

        document.querySelector(values.shoppingList).insertAdjacentHTML('beforeend', elem);
    });
};

/**
 * Clear shopping list
 */
export const deleteShoppingList = () => {
    document.querySelector(values.shoppingList).innerHTML = '';
};


