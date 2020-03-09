
export class LikesList {

    constructor(list) {
        this.list = [];
    }

    addItem (recipe) {
            recipe.isLiked = true;
            this.list.push(recipe);
    }

    deleteItem (recipe) {
        recipe.isLiked = false;
        const index = this.list.findIndex( value => recipe.id === value.id);
        this.list.splice(index, 1);
    }

    isLiked (recipe) {
        return recipe.isLiked ? true : false;
    }

}