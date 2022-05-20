class FilterRecetteAdapter {
    constructor(recettes, selectedArray, Args) {
        this.recettes = recettes
        this.args = Args
        this.selectedArray = selectedArray
    }

    async filterByWord(){
        return await Filter.filterByWord(this.recettes, this.selectedArray, this.args)}
}