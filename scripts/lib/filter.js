class Filter {
    /**
     * 
     * @param {array} recipeArray
     * @param {array} Recettes 
     * @returns 
     */


    static async filterByWord(Recettes, recipeArray){

        if(recipeArray == null){
            return Recettes // Si recipeArray est NULL, on annule tout on renvoi toutes les recettes
        }

        // console.log(recipeArray)

        let results = Recettes
        let filtered = [];
        let $header_section = document.querySelector('#recette_section');
        let $elementError = document.createElement('div');
        let funcs = [];
        let toggle = null;




        console.log(recipeArray)

        for(let t = 0; t < recipeArray.length; t++){
            // console.log(results)
            const recipe = recipeArray[t]
            console.log(recipe)

            for(let i = 0; i < results.length; i++){
                    const recette = results[i]; // Récupération de la recette unique à chaque tour
                    // console.log(results)
                
                // if(recipeArray.length = 1){
                    /* Récupération du nom de la recette */
                    const zerecette = recette.name
                    // console.log(zerecette)
                    if((zerecette.includes(recipe)) && (!filtered.includes(recette))){
                    // console.log(zerecette)
                    console.log(recipe + ' est le nom de  ' + zerecette)
                        filtered.push(recette)
                        toggle = true;
                    } 

                    else if(!zerecette.includes(recipe)){
                    /* Récupération des ingrédients */
                        for(let a = 0; a < recette.ingredients.length; a++){
                            const ingr = recette.ingredients[a].ingredient;
                            const zeingr = ingr
                            if((zeingr === recipe) && (!filtered.includes(recette))){
                                console.log(recipe + ' est ingrédient de  ' + zeingr)
                                filtered.push(recette)
                                toggle = true;
                            }
                            else{
                                toggle = false;
                            }
                        }
                    }

                    else if(toggle = false){
                    /* Récupération des ustensils */
                        for(let  b = 0; b < recette.ustensils.length; b++){
                            const ust = recette.ustensils[b];
                            const zeustensil = ust
                            if((zeustensil === recipe) && (!filtered.includes(recette))){
                                console.log(recipe + ' est ustensil de  ' + zeustensil)
                                toggle = true;
                                filtered.push(recette)
                            } else{
                                toggle = false;
                            }
                        }
                    }

                    else if(toggle = false){
                    /* Récupération des appareils */
                    const appliance = recette.appliance
                    const zeapp = appliance
                        if((zeapp === recipe) && (!filtered.includes(recette))){
                            console.log(recipe + ' est appliance de  ' + zeapp)
                            filtered.push(recette)
                            toggle = true;
                        }
                    }
            
                // } // Fin de la condition array = 1

                // else if(recipeArray.length > 1){
                //     for(let y = 0; y < recipeArray.length; y++){

                //     }
                // }
                return filtered
            } // Fin de la boucle resultsLength

            // console.log(filtered)
            if(filtered.length == 0){
                $header_section.appendChild($elementError);
                $elementError.innerHTML = 'Pas de recettes dispo'
            }
        } // Fin de la giga boucle

        if ((!recipeArray) || (!filtered)) {
            console.log('aucun choix') 
            return results
        }



        return filtered // return le tableau filtered 
    } // Fin de la fonction

}
