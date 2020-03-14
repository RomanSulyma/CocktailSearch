import {values} from '../Base';

/**
 * Render likes list element and insert to page
 *
 * @param likesList
 */
export const renderLikesList = (likesList) => {

    likesList.forEach(value => {

        const elem = `<li>
                            <a class="likes__link" href="${value.id}">
                                <figure class="likes__fig">
                                    <img src="${value.strDrinkThumb}" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">${value.strDrink}</h4>
                                </div>
                            </a>
                        </li>`;

        document.querySelector(values.likesList).insertAdjacentHTML('beforeend', elem);
    });
};

/**
 * Clear likes list
 */
export const deleteLikesList = () => {
    document.querySelector(values.likesList).innerHTML = '';
};
