import {values} from '../Base';

/**
 * Render likes list element and insert to page
 *
 * @param likesList
 */
export const renderLikesList = (likesList) => {

    likesList.forEach(value => {

        const elem = `<div class="list-inline-item list-group-item-action col col-4 ml-0 mr-0 mt-2 rounded">
                            <div class="likes__link" href="${value.id}">
                                <img src="${value.strDrinkThumb}" class="img-thumbnail w-25">
                                <span class="likes__name">${value.strDrink}</span>
                            </div>
                    </div>`;

        document.querySelector(values.likesList).insertAdjacentHTML('beforeend', elem);
    });
};

/**
 * Clear likes list
 */
export const deleteLikesList = () => {
    document.querySelector(values.likesList).innerHTML = '';
};
