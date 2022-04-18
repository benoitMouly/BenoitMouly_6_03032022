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


        let results = Recettes
        let filtered = [];
        let $header_section = document.querySelector('#recette_section');
        let $elementError = document.createElement('div');
        let tour = 0;

        let zeustensil = '';
        let toggle = null;



        for(let t = 0; t < recipeArray.length; t++){
            tour ++;
            // console.log(results)
            const recipe = recipeArray[t]
            // let zeingr = null;
            console.log(recipe + ' ' + [t])
            for(let i = 0; i < results.length; i++){
                const recette = results[i]; // Récupération de la recette unique à chaque tour
                let zeingr = null;
                    /* Récupération du nom de la recette */
                    let zerecette = recette.name
                    const appliance = recette.appliance
                    let zeapp = appliance
                    // console.log(zerecette)
                    // for(let a = 0; a < recette.ingredients.length; a++){
                    //     const ingr = recette.ingredients[a].ingredient;
                    //     zeingr = ingr
                    // if((zeingr.includes(recipe)) && (!filtered.includes(recette)  && (tour <= 2 ))){ 
                    //         console.log(recipe + ' est ingrédient de  ' + zeingr)
                    //         filtered.push(recette)
                    //         toggle = true;
                    // }

                    // else if((zeingr.includes(recipe)) && (filtered.includes(recette)  && (tour > 2 ))){
                    //     toggle = true 
                    //     console.log(recipe + ' est ingrédient de  ' + zeingr + ' BOUCLE 2')

                    // }
                    // }

                    // for(let  b = 0; b < recette.ustensils.length; b++){
                    //         const ust = recette.ustensils[b];
                    //         zeustensil = ust
                    //         if((zeustensil.includes(recipe)) && (!filtered.includes(recette)  && (tour <= 2))){  
                    //             console.log(recipe + ' est ustensil de  ' + zeustensil)
                    //             filtered.push(recette)
                    //             toggle = true;
                    //         }
                    //         else if((zeustensil.includes(recipe)) && (filtered.includes(recette)  && (tour > 2  ))){
                    //             toggle = true; 
                    //         }
                    // }
                    
                    if((zerecette.includes(recipe)) && (!filtered.includes(recette)) && (tour <= 2)){ // on ajoute pu de recette comme le premier tri a été fait, donc un tour de boucle suffit
                    // console.log(zerecette)
                        console.log(recipe + ' est le nom de  ' + zerecette)
                        toggle = true
                        filtered.push(recette)
                        // titleToggle = true;
                    }
                    else if((zerecette.includes(recipe)) && (filtered.includes(recette)) && (tour > 2)){
                        toggle = true;
                        // filtered.push(recette)
                        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%teub')
                    }

                    else if((zeapp.includes(recipe)) && (!filtered.includes(recette))  && (tour <= 2)){  
                        console.log(recipe + ' est appliance de  ' + zeapp)
                        filtered.push(recette)
                        toggle = true
    
                    }
                    else if((zeapp.includes(recipe)) && (filtered.includes(recette))  && (tour > 2)){  
                        toggle = true;
                    }
                    for(let a = 0; a < recette.ingredients.length; a++){
                        let ingr = recette.ingredients[a].ingredient;
                        zeingr = ingr
                    if((zeingr.includes(recipe)) && (!filtered.includes(recette)  && (tour <= 2 ))){ 
                            console.log(recipe + ' est ingrédient de  ' + zeingr)
                            filtered.push(recette)
                            toggle = true;
                    }

                    else if((zeingr.includes(recipe)) && (filtered.includes(recette)  && (tour > 2 ))){
                        zeingr +=
                        toggle = true 
                        console.log(recipe + ' est ingrédient de  ' + zeingr + ' BOUCLE 2')

                    }
                    }
                     /**** 190 Avril,  00:40 -> On a du mal a récupérer les éléments unique du tableau Si on peut essayer de les déssouder, on pourra les combiner. Actuellement seul 1 sort à chaque requête de recette  */
                    for(let  b = 0; b < recette.ustensils.length; b++){
                            let ust = recette.ustensils[b];
                            zeustensil = ust
                            if((zeustensil.includes(recipe)) && (!filtered.includes(recette)  && (tour <= 2))){  
                                console.log(recipe + ' est ustensil de  ' + zeustensil)
                                filtered.push(recette)
                                toggle = true;
                            }
                            else if((zeustensil.includes(recipe)) && (filtered.includes(recette)  && (tour > 2  ))){
                                toggle = true; 
                            }
                    }


                    /* Toggle de suppression */
                            if((!zeustensil.includes(recipe)) && (!zeingr.includes(recipe)) && (!zeapp.includes(recipe)) && (!zerecette.includes(recipe)) && (filtered.includes(recette)  && (tour > 2  ))){
                                console.log(zeingr)
                                console.log(recipe + 'gsgdsgdsgsgqshj<rs')
                                toggle = false;
                            }

                            // else if((!zeustensil.includes(recipe)) && (filtered.includes(recette)  && (tour > 2 ))){
                            //     toggle = false;
                            // }
      
                            //  else{
                            //     toggle = false;
                            // }
                        
              
    
                        // if(((!zerecette.includes(recipe)) || (!zeingr.includes(recipe)) || (!zeapp.includes(recipe)) || (!zeustensil.includes(recipe))) && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         erased = true;
                        //     }
    
                            
                        //     console.log(filtered)
    
                        //     console.log('-----------------------------------------------------')
                        // }



                        // if((titleToggle == false && ustensilToggle == false && ingrToggle == false && appToggle == false)  && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     // console.log(zeingr)
                        //     console.log(zerecette)
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // tour ++;
                        //     }
                        //     console.log('-----------------------------------------------------')
                        // }

                        // if((!zerecette.includes(recipe))  && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // erased = true;
                        //     }
                        //     console.log(filtered)
                        //     console.log('-----------------------------------------------------')
                        // }

                        // if((!zeingr.includes(recipe))  && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // erased = true;
                        //     }
                        //     console.log(filtered)
                        //     console.log('-----------------------------------------------------')
                        // }
                        // if((!zeapp.includes(recipe))  && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // erased = true;
                        //     }
                        //     console.log(filtered)
                        //     console.log('-----------------------------------------------------')
                        // }
                        // if((!zeustensil.includes(recipe))  && (filtered.includes(recette))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // erased = true;
                        //     }
                        //     console.log(filtered)
                        //     console.log('-----------------------------------------------------')
                        // }

                        // if((titleToggle)  && (filtered.includes(recette)) || ((appToggle)  && (filtered.includes(recette)) || (ustensilToggle)  && (filtered.includes(recette)) || (ingrToggleLimon)  && (filtered.includes(recette)))){
                        //     console.log('---------------suppression------------------------')
                        //     console.log(recipe + ' is not dans le titre de ' + zerecette)
                        //     for( let d = 0; d < filtered.length; d++){
                        //         if(filtered[d] === recette)
                        //         filtered.splice(d, 1);
                        //         // erased = true;
                        //     }
                        //     console.log(filtered)
                        //     console.log('-----------------------------------------------------')
                        // }
                        console.log(toggle)
                        if((toggle != true) && (filtered.includes(recette))){
                            console.log('---------------suppression------------------------')
   
                            console.log(recipe + ' is not dans le titre de ' + zerecette)
                            for( let d = 0; d < filtered.length; d++){
                                if(filtered[d] === recette)
                                filtered.splice(d, 1);
                                // erased = true;
                            }
                            console.log(filtered)
                            console.log('-----------------------------------------------------')
                        }

                        // toggle = true;

            } // Fin de la boucle resultsLength


            // console.log(filtered)
            if(filtered.length == 0){
                $header_section.appendChild($elementError);
                $elementError.innerHTML = 'Pas de recettes dispo'
            }
            tour ++;
            console.log(tour)
        } // Fin de la giga boucle

        if ((!recipeArray) || (!filtered)) {
            console.log('aucun choix') 
            return results
        }
        console.log('///////////////////////////////////')
        console.log(filtered)
        console.log(tour)
        console.log('//////////////')

        return filtered // return le tableau filtered 
    } // Fin de la fonction

}
