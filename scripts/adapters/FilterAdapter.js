class FilterRecetteAdapter {
    constructor(recettes, recipe, selectedArray) {
        this.recettes = recettes
        this.recipe = recipe
        this.selectedArray = selectedArray
        // console.log(recipe)
        // this.date = date
        // this.likes = likes
    }

    async filterByTitle() {
        return await Filter.filterByTitle(this.recipe, this.recettes)
    }

    async filterByWord(){
        
        return await Filter.filterByWord(this.recettes, this.recipe, this.selectedArray) // 15-04-2022 je test en rajoutant le selectedArray, qui du coup incrémenterait la fonction pour --
        // -- finir une requête (donc premier élément de l'array, puis le second ...). A confirmer et a réessayer et revérifier partout où filterWord est appelé
    }

    // async filterByDate() {
    //     return await Filter.filterByDate(this.date, this.Medias)
    // }

    // async filterByPopularity() {
    //     return await Filter.filterByPopularity(this.likes, this.Medias)
    // }
}