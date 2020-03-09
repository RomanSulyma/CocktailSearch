import {values} from '../Base';

export const renderShoppingList = (shoppingList) => {

    shoppingList.forEach( value => {

        const elem = `<li class="shopping__item" data-item-id = "${value.id}">
                    <p class="shopping__description">${value.name}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>`;

        document.querySelector(values.shoopingList).insertAdjacentHTML("beforeend", elem);
    });
};

export const deleteShoppingList = () => {
    document.querySelector(values.shoopingList).innerHTML = '';
};


