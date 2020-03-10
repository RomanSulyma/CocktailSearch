import {values} from '../Base';

export const renderLikesList = (likesList) => {

    likesList.forEach( value => {

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

        document.querySelector(values.likesList).insertAdjacentHTML("beforeend", elem);
    });
};

export const toggleButton = (isLiked) => {
    let elem = document.querySelector(`${values.likeButton} use`);
    isLiked ? elem.setAttribute('href', 'img/icons.svg#icon-heart') : elem.setAttribute('href', 'img/icons.svg#icon-heart-outlined');
};

export const deleteLikesList = () => {
    document.querySelector(values.likesList).innerHTML = '';
};
