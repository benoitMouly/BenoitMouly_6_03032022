class FilterForm {

        constructor(recettes) {
        this.recettes = recettes;
        this.$RecettesHeader = document.querySelector('#recette_section');
        this.$searchInput = document.querySelector('#search-input');
        this.$rollers = document.querySelectorAll('.input-elt');
        this.rollers = [];
        this.inputed = [];
        this.ust = [];
        this.ingr = [];
        this.app = [];
        this.option = document.querySelector('.truc');
        this.cursors = []

    }

        async filterText(finalArray){
            // console.log(finalArray)
            // console.log(this.cursors)
            this.clearMediasWrapper();
            this.cleanRollers();


            let AdaptedFilterLib = new FilterRecetteAdapter(this.recettes, finalArray, this.ingredientsData); // nouvel Adaptater

            let FilteredRecipeTitle = await AdaptedFilterLib.filterByWord(); // filterByWord est la fonction qui filtre les recettes

            FilteredRecipeTitle.forEach(recette => {
                const template = new FilteredCard(recette);
                this.$RecettesHeader.appendChild(template.createRecetteCard());
            })
        }

        concatFilter(e, touchrollers, touchinputed, ust_array, app_array, ingr_array, touchcursor ){

            this.clearMediasWrapper();


            let rolling = document.querySelectorAll('.input-elt');

            let FilterInputr = new FilterInput(this.recettes);
            touchcursor = null
            ust_array = this.ust;
            app_array = this.app;
            ingr_array = this.ingr;
            let validate = false;
            
    
            for( let i = 0; i < rolling.length; i++){
                rolling[i].addEventListener('click', function(rolling, e){
                    FilterInputr.selectValue(rolling, touchrollers,  touchcursor);
                    validate = true;


                })
            }


            this.$searchInput.addEventListener('input', this.onChangeFilter(e, touchinputed))

            touchrollers = this.rollers
            touchinputed = this.inputed

            if((touchrollers.length > 0) || (touchinputed.length > 0)){ 

                if((touchrollers.length > 0) && (touchinputed.length > 0)){
                    this.clearMediasWrapper();
                    let finalArray = touchinputed.concat(touchrollers)
                    this.filterText(finalArray)
                }
                else if((touchrollers.length > 0) && (touchinputed == 0)){
                    this.clearMediasWrapper();
                    this.filterText(this.rollers)
                }
                else if((touchinputed.length > 0) && (touchrollers == 0)){
                    this.clearMediasWrapper();
                    this.filterText(touchinputed)
                }

            }
            else{
                this.filterText(null)
            }
        }


    /**
     * @function onChangeFilter détecte l'input
     */

    onChangeFilter(e, selectedTitre) {
        let searchInput = document.querySelector('#search-input')
        let selectedArray = [];
        let blacklist = ['de ', ' de ',  'à', 'le', 'la', ' a ', 'des', 'de'];

            if(searchInput.value.length >= 3){

                selectedTitre = e.target.value;
                selectedTitre = selectedTitre.replace(/@\W\:w+(\w+\s\w+)%/g, "@$1");
                selectedArray = selectedTitre.match(/(#?<?\w+)|(\@\w+\s\w+)/g);

                if(selectedArray){
                    for(let t = 0; t < selectedArray.length; t++){
                        let recipeFiltered = selectedArray[t];
                        for( let i = 0; i < blacklist.length; i++){
                            if ((blacklist[i] === recipeFiltered)){
                               console.log(blacklist[i] + ' ----------------------------ennemi detecté--------------------------------------------');
                               selectedArray.splice(t , 1);
                            }
                        } 
                    }

                this.inputed = selectedArray

                }
            }
            else {
                this.inputed = [];
            }

            
    }

    cleanRollers(){
        this.$rollers.innerHTML = "";
    }

    removeDuplicates(array) {
        if(!array){
            return
        } else {
        const result = [];
        for (let i = 0; i < array.length; i++) {
          var exists = false;
          for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            result.push(array[i]);

          }

        }
        array.length = 0
        array.push.apply(array, result)
        return array;
    }
      }

    clearMediasWrapper() {
        this.$RecettesHeader.innerHTML = "";
    }

    render(e){

        this.concatFilter(e);
    }

}
