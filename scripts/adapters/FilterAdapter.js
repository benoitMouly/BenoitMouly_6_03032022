class FilterRecetteAdapter {
    constructor(recettes, selectedArray, recipe) {
        this.recettes = recettes
        this.recipe = recipe
        this.selectedArray = selectedArray
        console.log(this.selectedArray)
        // console.log(recipe)
        // this.date = date
        // this.likes = likes
    }

    async filterByTitle() {
        return await Filter.filterByTitle(this.recipe, this.recettes)
    }

    async filterByWord(){
        // for(let i = 0; i < this.selectedArray.length; i++){
        return await Filter.filterByWord(this.recettes, this.selectedArray, this.recipe)} // 15-04-2022 je test en rajoutant le selectedArray, qui du coup incrémenterait la fonction pour --
        // -- finir une requête (donc premier élément de l'array, puis le second ...). A confirmer et a réessayer et revérifier partout où filterWord est appelé
    // }

    // async filterByDate() {
    //     return await Filter.filterByDate(this.date, this.Medias)
    // }

    // async filterByPopularity() {
    //     return await Filter.filterByPopularity(this.likes, this.Medias)
    // }
}