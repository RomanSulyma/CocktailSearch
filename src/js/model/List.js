
export class List {

    constructor() {
        this.list = [];
    }

    addItem (recipe) {}

    deleteItem (recipe) {
        const index = this.list.findIndex( value => recipe. id === value.id);
        this.list.splice(index, 1);
    }
}