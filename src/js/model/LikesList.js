import {List} from './List';

export class LikesList extends List{

    constructor() {
        super();
        this.list = [];
    }

    addItem (recipe) {
            recipe.isLiked = true;
            this.list.push(recipe);
    }

    isLiked (recipe) {
        return this.list.findIndex(elem => recipe.id === elem.id) !== -1;
    }
}