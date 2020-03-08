import {values} from '../Base';

const renderReciept = (reciept) => {

    const elem = `
                <li>
                    <a class="results__link" href="#${reciept.idDrink}">
                        <figure class="results__fig">
                            <img src="${reciept.strDrinkThumb}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${reciept.strDrink}</h4> 
                        </div>
                    </a>
                </li>`;
        document.querySelector(values.resultsList).insertAdjacentHTML('beforeend', elem);
};

export const renderRecieptsPagination = (recieptsList, page, limit) => {

    clearSearchListUI();

    const start = (page - 1) * limit;
    const end = page * limit;
    const arrPerPage = recieptsList.slice(start, end);

    arrPerPage.forEach(value => {
        renderReciept(value);
    });
};

export const getSearchInput = () => {
    const input = document.querySelector(values.searchInput).value;
    document.querySelector(values.searchInput).value = '';
    return input;
};

const clearSearchListUI = () => {
    document.querySelector(values.resultsList).innerHTML = '';
    document.querySelector(values.pageParent).innerHTML = '';
};

export const toggleSpinner = () => {
    const loader = `
        <div class="${values.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    const loaderElem = document.querySelector(values.loader);
    if(loaderElem) {
        loaderElem.parentNode.removeChild(loaderElem);
    } else {
        document.querySelector(values.resultsList).insertAdjacentHTML("afterbegin", loader);
    }
};