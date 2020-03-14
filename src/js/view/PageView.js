import {values} from "../Base";

/**
 * Render page buttons on UI
 *
 * @param page
 * @param allPages
 */
export const renderPageButtons = (page, allPages) => {

    page = parseInt(page);
    const buttonLeft = ` <button class="btn-inline results__btn--prev"  data-page="${page - 1}">
                    <span>Page ${page - 1}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>`;

    const buttonRight = `<button class="btn-inline results__btn--next" data-page="${page + 1}">
                    <span>Page ${page + 1}</span>
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

/**
 * Delete pages before update
 */
export const deletePageButtons = () => {
    document.querySelector(values.pageParent).innerHTML = '';
};

/**
 * Get page number from UI
 *
 * @returns {string}
 */
export const getPageNumber = () => {
    return document.querySelector(values.resultsList).getAttribute(values.dataPage);
};

/**
 * Change page number on UI
 *
 * @param page
 */
export const changePageNumber = (page) => {
    document.querySelector(values.resultsList).setAttribute(values.dataPage, page);
};