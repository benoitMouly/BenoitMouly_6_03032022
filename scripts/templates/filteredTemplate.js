class FilterForm {

    constructor(recettes, ingredientsData) {
        this.recettes = recettes
        this.ingredientsData = ingredientsData
        this.$RecettesHeader = document.querySelector('#recette_section')
        this.$searchInput = document.querySelector('#search-input')
    }

        async filterTitle(selectedArray){
            this.clearMediasWrapper()
            let AdaptedFilterLib = new FilterRecetteAdapter(this.recettes, selectedArray, this.ingredientsData) // nouvel Adaptater
            let FilteredRecipeTitle = await AdaptedFilterLib.filterByWord() // filterByWord est la fonction qui filtre les recettes par titre

            FilteredRecipeTitle.forEach(recette => {
                const template = new FilteredCard(recette)
                this.$RecettesHeader.appendChild(template.createRecetteCard())
            })
        }

    /**
     * @function onChangeFilter détecte l'input
     */


    
    onChangeFilter(e, selectedTitre) {
        let searchInput = document.querySelector('#search-input')
        let selectedArray = []
        let blacklist = ['de ', ' de ',  'à', 'le', 'la', 'a', 'des', 'de']


            if(searchInput.value.length >= 3){

                selectedTitre = e.target.value

                selectedTitre = selectedTitre.replace(/@\W\:w+(\w+\s\w+)%/g, "@$1");

                selectedArray = selectedTitre.match(/(#?<?\w+)|(\@\w+\s\w+)/g);

                if(selectedArray){
                    for(let t = 0; t < selectedArray.length; t++){
                        let recipeFiltered = selectedArray[t]
                        if(recipeFiltered.length <= 3){
                            selectedArray.splice(t, 1)
                        }
                        for( let i = 0; i < blacklist.length; i++){
                            if ((blacklist[i] === recipeFiltered)){
                               console.log(blacklist[i] + ' ----------------------------ennemi detecté--------------------------------------------')
                               selectedArray.splice(t , 1)
                            }
                        }
                        
                    }
                console.log(selectedArray)
                this.filterTitle(selectedArray)
                }
                else{
                this.filterTitle(null)                }


            } else {
                this.filterTitle(null)
            }

    }



    clearMediasWrapper() {
        this.$RecettesHeader.innerHTML = ""
    }

    render(e){
        this.onChangeFilter(e)
    }

}
