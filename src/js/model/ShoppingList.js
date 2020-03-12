import uniqid from 'uniqid';
import {List} from './List';

export class ShoppingList extends List {

    constructor() {
        super();
        this.list = [];
    }

    addItem (recipe) {
        recipe.ingredients.forEach(value => {
            const item = {
                name : value,
                id : this.generateID()
            };
            this.list.push(item);
        });
    }

    generateID () {
        return uniqid();
    }
}