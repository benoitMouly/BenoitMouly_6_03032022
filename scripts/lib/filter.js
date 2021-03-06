class Filter {
    /**
     * 
     * @param {array} recipeArray
     * @param {array} Recettes 
     * @returns 
     */


    static async filterByWord(Recettes, recipeArray, Args){
        let recettes = Recettes
        // console.log(recettes)

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
        let ustensils_options = document.getElementById('dataustensileslist').options;
        let appliances_options = document.getElementById('dataappareilslist').options;

        if(recipeArray == null){
            // si recipeArray est null , on remets toutes nos options roller en display block.
            for(let i = 0; i < ingredients_options.length; i++){
                ingredients_options[i].style.display = "block"
            }
            for(let i = 0; i < appliances_options.length; i++){
                appliances_options[i].style.display = "block"
            }
            for(let i = 0; i < ustensils_options.length; i++){
                ustensils_options[i].style.display = "block"
            }
            return Recettes                           // Si recipeArray est NULL, on annule tout on renvoi toutes les recettes
        }

        ingredients_options = document.getElementById('dataingredientslist').options;
        for (let i  = 0; i < ingredients_options.length; i++){
            ingredient_rollerData.push(ingredients_options[i].value)
        }
        ustensils_options = document.getElementById('dataustensileslist').options;
        for (let i  = 0; i < ustensils_options.length; i++){
            ust_rollerData.push(ustensils_options[i].value)
        }
        appliances_options = document.getElementById('dataappareilslist').options;
        for (let i  = 0; i < appliances_options.length; i++){
            app_rollerData.push(appliances_options[i].value)
        }

        const t0 = performance.now();
        for(let t = 0; t < recipeArray.length; t++){
            const recipe = recipeArray[t]
            toggle = true;


            for(let i = 0; i < recettes.length; i++){
                const recette = recettes[i];   // R??cup??ration de la recette unique ?? chaque tour

                    /* R??cup??ration du nom de la recette */
                    name = recette.name
                    /* R??cup??ration de l'appareil */
                    appliance = recette.appliance
                    /* R??cup??ration de la description */ 
                    desc = recette.description

                    if((name.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){              // on ajoute pu de recette comme le premier tri a ??t?? fait, donc un tour de boucle suffit
                        toggle = true
                        filtered.push(recette)
                    }
                    else if((name.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                        toggle = true; // On emp??che les doublons en mettant seulement true, et en ne pushant pas
                    }


                    if((desc.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){              // on ajoute pu de recette comme le premier tri a ??t?? fait, donc un tour de boucle suffit
                        toggle = true
                        filtered.push(recette)
                    }
                    else if((desc.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                        toggle = true; // On emp??che les doublons en mettant seulement true, et en ne pushant pas
                    }
                    
                    else if((appliance.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){  
                        filtered.push(recette)
                        toggle = true
    
                    }
                    else if((appliance.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){  
                        toggle = true;
                    }
                        /* R??cup??ration des ingr??dients et des ustensiles */
                        else{

                        for(let a = 0; a < recette.ingredients.length; a++){
                            const ingr = recette.ingredients[a].ingredient;
                            zeingr = ingr
                            if((zeingr.includes(recipe)))
                            if((zeingr.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){ 
                                    filtered.push(recette)
                                    toggle = true;
                                    break; // Premier tour, on casse car on a trouv??. Break concerne les ??l??ments, pas les recettes
                            }

                            else if((zeingr.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                                toggle = true
                                break; // Deuxi??me tour, on casse car sinon ??a va traverser tous les autres ??l??ments
                            }

                        }

                     for(let  b = 0; b < recette.ustensils.length; b++){
                            let ust = recette.ustensils[b];
                            zeustensil = ust
                            if((zeustensil.includes(recipe)) && (!filtered.includes(recette)) && (tour == 0)){  
                                filtered.push(recette)
                                toggle = true;
                                break;

                            }
                            else if((zeustensil.includes(recipe)) && (filtered.includes(recette)) && (tour > 0)){
                                toggle = true
                                break;

                            }
                    }
                } 

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
            }    // Fin de la boucle pour UNE recette

            if(filtered.length == 0){
                // console.log('--- pas de recette ---')
                // console.log(filtered)
                // console.log('----')
                $header_section.appendChild($elementError);
                $elementError.innerHTML = '?? Aucune recette ne correspond ?? votre crit??re??? vous pouvez chercher ?? tarte aux pommes ??, ?? poisson ??, etc. \??\
                '
            }
            tour ++;
        }  // Fin de la giga boucle

/*
* R??cup??ration des diff??rentes informations des ??l??ments filtr??s
**/

        for(let i = 0; i < filtered.length; i++){ // FROM les ??l??ments filtr??s.
            const filtered_unique = filtered[i];
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


        }
        


/*
* Gestion des ??l??ments dans les rollers
*/


            for(let i = 0; i < ingredient_rollerData.length; i++){
                let Zutat = ingredient_rollerData[i] // est ??gal aux datas innerHTML
                let optioneed = ingredients_options 
                let optioneed_unique = optioneed[i] // est ??gal aux data de TYPE html
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
            }


            for(let i = 0; i < app_rollerData.length; i++){
                let Gerate = app_rollerData[i] // est ??gal aux datas innerHTML
                let optioned_appliance = appliances_options 
                let optioned_appliance_unique = optioned_appliance[i] // est ??gal aux data de TYPE html

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
            }

            for(let i = 0; i < ust_rollerData.length; i++){
                let Gerate = ust_rollerData[i] // est ??gal aux datas innerHTML

                let optioned_ustensils = ustensils_options 
                let optioned_ustensils_unique = optioned_ustensils[i] // est ??gal aux data de TYPE html

                if(ust_arr.includes(Gerate)){
                    optioned_ustensils_unique.style.display = 'block';

                }
                else if(!ust_arr.includes(Gerate) && filtered.length > 0){
                    // console.log('ne contient pas')
                        var p =0;
                        while (p < optioned_ustensils.length) {
                            if (optioned_ustensils_unique.value === Gerate) {
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
            }

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
