class Filter {
    /**
     * 
     * @param {array} recipeArray
     * @param {array} Recettes 
     * @returns 
     */


    static async filterByWord(Recettes, recipeArray, Args){

        let recettes = Recettes
        let filtered = [];
        let $header_section = document.querySelector('#recette_section');
        let $elementError = document.createElement('div');
        let tour = 0;
        let appliance = '';
        let name = '';
        let desc = '';
        let zeingr = '';
        let zeustensil = '';
        let toggle = null;
        let ingredient_rollerData = [];
        let app_rollerData = [];
        let ust_rollerData = [];
        let ingr_arr = [];
        let ust_arr = [];
        let appliance_arr = [];
        let ingredients_options = document.getElementById('dataingredientslist').options;
        // console.log(ingredients_options)
        let ustensils_options = document.getElementById('dataustensileslist').options;
        let appliances_options = document.getElementById('dataappareilslist').options;

        if(recipeArray == null){
            Array.from(ingredients_options).forEach((options) => {
                options.style.display = 'block'
              });
            Array.from(appliances_options).forEach((options) => {
                options.style.display = 'block'
              });
            Array.from(ustensils_options).forEach((options) => {
                options.style.display = 'block'
              });

            return Recettes                           // Si recipeArray est NULL, on annule tout on renvoi toutes les recettes
        }

        const t0 = performance.now();
        
        Array.from(ingredients_options).forEach((options) => {
            ingredient_rollerData.push(options.value)
          });

        Array.from(ustensils_options).forEach((options) => {
            ust_rollerData.push(options.value)
          });

        Array.from(appliances_options).forEach((options) => {
            app_rollerData.push(options.value)
          });


       recipeArray.forEach((recipe_unical) => {

            const recipe = recipe_unical
            toggle = true;


            recettes.forEach((recette_unical) => {
                const recette = recette_unical;   // Récupération de la recette unique à chaque tour

                    /* Récupération du nom de la recette */
                    name = recette.name
                    /* Récupération de l'appareil */
                    appliance = recette.appliance
                    /* Récupération de la description */
                    desc = recette.description

                    if((name.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){              // on ajoute pu de recette comme le premier tri a été fait, donc un tour de boucle suffit
                        toggle = true
                        filtered.push(recette)
                    }
                    else if((name.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                        toggle = true; // On empêche les doublons en mettant seulement true, et en ne pushant pas
                    }

                    else if((desc.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){              // on ajoute pu de recette comme le premier tri a été fait, donc un tour de boucle suffit
                        toggle = true
                        filtered.push(recette)
                    }
                    else if((desc.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                        toggle = true; // On empêche les doublons en mettant seulement true, et en ne pushant pas
                    }
                    
                    else if((appliance.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){  
                        filtered.push(recette)
                        toggle = true
    
                    }
                    else if((appliance.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){  
                        toggle = true;
                    }
                        /* Récupération des ingrédients et des ustensiles */
                        else{

                    recette.ingredients.some(function(ingr) { /// return un boolean
                            zeingr = ingr.ingredient
                            if((zeingr.includes(recipe)))
                            if((zeingr.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){ 
                                    filtered.push(recette)
                                    toggle = true;
                                    return zeingr; // Premier tour, on casse car on a trouvé. Break concerne les éléments, pas les recettes
                            }

                            else if((zeingr.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                                toggle = true
                                return zeingr; // Deuxième tour, on casse car sinon ça va traverser tous les autres éléments
                            }

                        }) ///// 

                    recette.ustensils.some(function(ust) {
                            zeustensil = ust
                            if((zeustensil.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){  
                                filtered.push(recette)
                                toggle = true;
                                return zeustensil;

                            }
                            else if((zeustensil.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                                toggle = true
                                return zeustensil;

                            }
                    }
            )} 

               if(((!zeustensil.includes(recipe)) && (!zeingr.includes(recipe)) && (!appliance.includes(recipe)) && (!name.includes(recipe)) && (!desc.includes(recipe)) && (filtered.includes(recette)))){
                    toggle = false;
                    // console.log('va passer en false ===')
                    // console.log(recipe + ' ===== ')
                }

                if((toggle == false) && (filtered.includes(recette))){
                    var p =0;
                    while (p < filtered.length) {
                        if (filtered[p] === recette) {
                            filtered.splice(p, 1);
                        } else {
                            ++p;
                        }
                    }
                }
            })    // Fin de la boucle pour UNE recette

            if(filtered.length == 0){
                // console.log('--- pas de recette ---')
                // console.log(filtered)
                // console.log('----')
                $header_section.appendChild($elementError);
                $elementError.innerHTML = 'Pas de recettes disponibles ...'
            }
            tour ++;



        })  // Fin de la giga boucle

/*
* Récupération des différentes informations des éléments filtrés
**/
filtered.forEach((filtered_unical) => {

            const filtered_unique = filtered_unical
            // console.log(filtered_unique)

            for(let a = 0; a < filtered_unique.ingredients.length; a++){ 
                ingr_arr.push(filtered_unique.ingredients[a].ingredient);
                // console.log(ingr_arr)
            }
            for(let a = 0; a < filtered_unique.ustensils.length; a++){
                ust_arr.push(filtered_unique.ustensils[a]);
                // console.log(ust_arr)
            }
                appliance_arr.push(filtered_unique.appliance);
                // console.log(appliance_arr)


        })
        

/*
* Gestion des éléments dans les rollers
*/

ingredient_rollerData.forEach((ingredient_rollerData_unical) => {

                let Zutat = ingredient_rollerData_unical // est égal aux datas innerHTML
                let optioneed = ingredients_options
                Array.from(optioneed).forEach((optioneed_unique) => { 
                // let optioneed_unique = optioneed // est égal aux data de TYPE html
                if(ingr_arr.includes(Zutat)){
                    optioneed_unique.style.display = 'block';
                }
                else if(!ingr_arr.includes(Zutat) && filtered.length > 0){
                        var p =0;
                        while (p < optioneed.length) {
                            if (optioneed_unique.value === Zutat) {
                                optioneed_unique.style.display = 'none';
                            } 
                            else {
                                ++p;
                            }
                        break

                        }
                    }
                })
            })

            app_rollerData.forEach((app_rollerData_unical) => {

                let Gerate = app_rollerData_unical // est égal aux datas innerHTML
                let optioned_appliance = appliances_options 
                Array.from(optioned_appliance).forEach((optioned_appliance_unique) => {
                // let optioned_appliance_unique = optioned_appliance[i] // est égal aux data de TYPE html

                if(appliance_arr.includes(Gerate)){
                    optioned_appliance_unique.style.display = 'block';
                    // console.log(optioned_appliance_unique)
                }
                else if(!appliance_arr.includes(Gerate) && filtered.length > 0){
                        var p =0;
                        while (p < optioned_appliance.length) {
                            if (optioned_appliance_unique.value === Gerate) {
                                optioned_appliance_unique.style.display = 'none';
                            } 
                            else {
                                ++p;
                            }
                        break

                        }
                    }
                })
            })


            ust_rollerData.forEach((ust_rollerData_unical) => {
                let Werkzeug = ust_rollerData_unical// est égal aux datas innerHTML
                let optioned_ustensils = ustensils_options 
                // let optioned_ustensils_unique = optioned_ustensils[i] // est égal aux data de TYPE html
                Array.from(optioned_ustensils).forEach((optioned_ustensils_unique) => {
                if(ust_arr.includes(Werkzeug)){
                    optioned_ustensils_unique.style.display = 'block';

                }
                else if(!ust_arr.includes(Werkzeug) && filtered.length > 0){
                    // console.log('ne contient pas')
                        var p =0;
                        while (p < optioned_ustensils.length) {
                            if (optioned_ustensils_unique.value === Werkzeug) {
                                optioned_ustensils_unique.style.display = 'none';
                            } 
                            else {
                                ++p;
                            }
                        break
                        }
                    }
        
                if ((!filtered) || (!recipeArray)){
                    optioned_ustensils_unique.style.display = " block ";
                }
                })
            })
        

        if ((!recipeArray) || (!filtered)) {
            // console.log(filtered)
            return recettes
        }

        // console.log(filtered)

        const t1 = performance.now();
        console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

        return filtered   // return le tableau filtered 
    }  // Fin de la fonction
}
