import uniqid from 'uniqid';


export class ShoppingList {

    constructor(list) {
        this.list = [];
    }

    addItem (ingridients) {
        ingridients.forEach(value => {
            const item = {
                name : value,
                id : this.generateID()
            };

            this.list.push(item);
        });
    }

    deleteItem (id) {
        const index = this.list.findIndex( value => id === value.id);
        this.list.splice(index, 1);
    }

    generateID () {
        return uniqid();
    }

}