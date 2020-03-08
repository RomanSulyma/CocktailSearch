import {values} from "../Base";

export const renderPageButtons = (page, allPages) => {

    deletePages();

    const buttonLeft = ` <button class="btn-inline results__btn--prev">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Page ${page}</span>
                </button>`;

    const buttonRight = `<button class="btn-inline results__btn--next">
                    <span>Page ${parseInt(page) + 1}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>`;

    if(page > 1) {
        document.querySelector(values.pageParent).insertAdjacentHTML('beforeend', buttonLeft);
    }
    if(page < allPages) {
        document.querySelector(values.pageParent).insertAdjacentHTML('beforeend', buttonRight);
    }
};

const deletePages = () => {
    document.querySelector(values.pageParent).innerHTML = '';
};

export const getPageNumber = () => {
    return document.querySelector(values.resultsList).getAttribute('data-page');
};

export const changePageNumber = (attribValue) => {
    document.querySelector(values.resultsList).setAttribute('data-page', attribValue);
};