
export class List {

    constructor() {
        this.list = [];
    }

    addItem (recipe) {}

    deleteItem (id) {
        const index = this.list.findIndex( value => id === value.id);
        this.list.splice(index, 1);
    }
}