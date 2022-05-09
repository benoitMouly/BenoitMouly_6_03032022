// import this.recipes from '../data/data.js';
class FilterInput{
    constructor(recipes){
        this.recipes = recipes
        // let option_choice = []
        // let option_choice = []
        /* Création/récupération des elements permettant d'intégrer les choix */

        // $choicesWrapper.classList.add('row', 'choices-wrapper');
        // $searchInput.parentNode.insertBefore($choicesWrapper, $inputArguments);

                                                                                                                                                            // console.log(this.recipes)


// let rolling = document.querySelectorAll('.input-elt');

// console.log(rolling)

// for( let i = 0; i < rolling.length; i++){
//     rolling[i].addEventListener('click', function(rolling){
//         this.selectValue(rolling, option_choice);
//     })
// }
    }
//   async tg(option_choice){

// /* Création/récupération des elements permettant d'intégrer les choix */
// let $searchInput = document.querySelector('.search-input');
// let $inputArguments = document.querySelector('#input_arguments')
// let $choicesWrapper = document.querySelector('.choices-wrapper');
// // $choicesWrapper.classList.add('row', 'choices-wrapper');
// // $searchInput.parentNode.insertBefore($choicesWrapper, $inputArguments);

//                                                                                                                                                     // console.log(this.recipes)
// option_choice = [];
// let ingredients_arguments = [];
// let appareils_arguments = [];
// let ustensiles_arguments = [];
// let ingredient_unique = null;
// let appareil_unique = null;
// let ustensile_unique = null;
// let opt = null;
// let parent_ingredients = document.querySelector('#dataingredientslist');
// let parent_appareils = document.querySelector('#dataappareilslist');
// let parent_ustensiles = document.querySelector('#dataustensileslist');
// let overlay = document.createElement('div');
// overlay.setAttribute('id', 'overlay');                                                                                                                      // récupération des choix
// let inputingredient = document.querySelector('#inputingredients');
// let inputappareil = document.querySelector('#inputappareil')

// for(let i = 0; i < this.recipes.length; i++){                                                                                            // On push dans les différents tableaux
//     let recipe = this.recipes[i];
//     appareils_arguments.push(recipe.appliance)
//     for(let a = 0; a < recipe.ingredients.length; a++){
//         ingredients_arguments.push(recipe.ingredients[a].ingredient)
//     }
//     for(let b = 0; b < recipe.ustensils.length; b++){
//         ustensiles_arguments.push(recipe.ustensils[b])
//     }
// }


// for(let c = 0; c < ingredients_arguments.length; c++){
//     ingredient_unique = ingredients_arguments[c]
//     opt = document.createElement('option')
//     opt.setAttribute('class', 'bg-primary text-white')
//     opt.setAttribute('value', ingredient_unique)
//     opt.innerHTML = ingredient_unique;
//     parent_ingredients.appendChild(opt);

// }

// for(let d = 0; d < appareils_arguments.length; d++){
//     appareil_unique = appareils_arguments[d]
//     opt = document.createElement('option')
//     opt.setAttribute('class', 'bg-success text-white')
//     opt.setAttribute('value', appareil_unique)
//     opt.innerHTML = appareil_unique;
//     parent_appareils.appendChild(opt);

// }

// for(let e = 0; e < ustensiles_arguments.length; e++){
//     ustensile_unique = ustensiles_arguments[e]
//     opt = document.createElement('option')
//     opt.setAttribute('class', 'bg-danger text-white')
//     opt.setAttribute('value', ustensile_unique)
//     opt.innerHTML = ustensile_unique;
//     parent_ustensiles.appendChild(opt);

// }

// let rolling = document.querySelectorAll('.input-elt');

// for( let i = 0; i < rolling.length; i++){
//     rolling[i].addEventListener('click', function(rolling){
//         selectValue(rolling, option_choice);
//     })
// }

selectValue(rolling, option_choice, cursor) {

    let $choicesWrapper = document.querySelector('.choices-wrapper');
    // let ingredients_arguments = [];
    // let appareils_arguments = [];
    // let ustensiles_arguments = [];
    // let ingredient_unique = null;
    // let appareil_unique = null;
    // let ustensile_unique = null;
    // let opt = null;
    // let parent_ingredients = document.querySelector('#dataingredientslist');
    // let parent_appareils = document.querySelector('#dataappareilslist');
    // let parent_ustensiles = document.querySelector('#dataustensileslist');
    
    let overlay = document.querySelector('.overlay')
    // let option_choice = []
    // let overlay = document.createElement('div');
    // overlay.setAttribute('id', 'overlay');                                                                                                                      // récupération des choix

    // for(let i = 0; i < this.recipes.length; i++){                                                                                            // On push dans les différents tableaux
    //     let recipe = this.recipes[i];
    //     appareils_arguments.push(recipe.appliance)

    //     for(let a = 0; a < recipe.ingredients.length; a++){
    //         ingredients_arguments.push(recipe.ingredients[a].ingredient)

    //     }
    //     for(let b = 0; b < recipe.ustensils.length; b++){
    //         ustensiles_arguments.push(recipe.ustensils[b])

    //     }
    // }




    // for(let c = 0; c < ingredients_arguments.length; c++){
    //     ingredient_unique = ingredients_arguments[c]
    //     opt = document.createElement('option')
    //     opt.setAttribute('class', 'bg-primary text-white')
    //     opt.setAttribute('value', ingredient_unique)
    //     opt.innerHTML = ingredient_unique;
    //     parent_ingredients.appendChild(opt);

    // }

    // for(let d = 0; d < appareils_arguments.length; d++){
    //     appareil_unique = appareils_arguments[d]
    //     opt = document.createElement('option')
    //     opt.setAttribute('class', 'bg-success text-white')
    //     opt.setAttribute('value', appareil_unique)
    //     opt.innerHTML = appareil_unique;
    //     parent_appareils.appendChild(opt);

    // }

    // for(let e = 0; e < ustensiles_arguments.length; e++){
    //     ustensile_unique = ustensiles_arguments[e]
    //     opt = document.createElement('option')
    //     opt.setAttribute('class', 'bg-danger text-white')
    //     opt.setAttribute('value', ustensile_unique)
    //     opt.innerHTML = ustensile_unique;
    //     parent_ustensiles.appendChild(opt);

    // }
        // console.log(option_choice)
        rolling.stopImmediatePropagation();
        rolling = rolling.target
        // console.log(rolling);                                                                                                                    // Pourquoi pas ajouter le paramètre de l'élément cliqué
        let after_input = rolling.nextSibling;
        let datalist = after_input.nextElementSibling;
        let datalistId = datalist.id
        console.log(datalistId)
        let main_parent = rolling.closest('.widz'); // main_parent se réfère à l'id (exemple ; " #col-appareil ")
        let chevron = rolling.nextElementSibling.querySelector('.bi'); // réfère au chevron le plus proche de rolling ( qui est le bouton )    
        datalist.style.display = 'block'; // datalist se réfère à la datalist
        console.log(datalist)
        rolling.style.borderRadius = "5px 5px 0 0"; // rolling se réfère au bouton
        main_parent.classList.add('col-6');
        main_parent.classList.remove('col-2');
        chevron.classList.remove('bi-chevron-down');
        chevron.classList.add('bi-chevron-up');
        main_parent.after(overlay);
        overlay.style.display = 'block';
        main_parent.style.zIndex = '101';


        for (let option of datalist.options) {

            option.onclick = function (e) {
            rolling.value = option.value;
            option_choice.push(option.value);
            // e.preventDefault();
            pushIngredients(rolling.value);
            rolling.value = null // On masque le value de l'input 
            console.log(option_choice)
            datalist.style.display = 'none';
            rolling.style.borderRadius = "5px";
            main_parent.classList.add('col-2');
            main_parent.classList.remove('col-6');
            chevron.classList.add('bi-chevron-down');
            chevron.classList.remove('bi-chevron-up');
            overlay.style.display = 'none';
            main_parent.style.zIndex = '9';

        }
    }

        rolling.oninput = function () {
            currentFocus = -1;
            let text = rolling.value.toUpperCase();
            for (let i = 0; i < datalist.options.length; i++) {
                let options = datalist.options[i];
                if (options.value.toUpperCase().indexOf(text) > -1) {
                    options.style.display = "block";
                } else {
                    options.style.display = "none";
                    overlay.style.display = 'none';
                }
            };
        };

        let currentFocus = -1;
        rolling.onkeydown = function (e) {
            console.log(datalist.options.length)
            for (let i = 0; i < datalist.options.length; i++){
                let options = datalist.options[i];
                // console.log(options)


            if (e.keyCode == 40) {
                currentFocus++;
                addActive(datalist.options);
                console.log(datalist.options)
            }
            else if (e.keyCode == 38) {
                currentFocus--;
                addActive(datalist.options);
            }
            else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (datalist.options)
                        datalist.options[currentFocus].click();
                }
            }
        }
        };

        function pushIngredients(opted) {
            
            let eltChoose = document.createElement('div');
            eltChoose.classList.add('elt-choose', 'col-2');
            $choicesWrapper.appendChild(eltChoose);
            eltChoose.innerHTML = `<p class="opted">${opted}</p> <i class="bi bi-x-circle supp-choose option-elt search-element"></i> `;
            let supp_choose = document.querySelectorAll('.supp-choose');
           cursor = document.querySelector('.hovered')
           console.log(cursor)
            // return
            // console.log(option_choice + ' ----------------------------- ');
            // console.log(opted + ' poucheingredient');

            for (let i = 0; i < supp_choose.length; i++) {
                supp_choose[i].addEventListener('click', function (e) {

                suppIngredients(opted, eltChoose);
                document.querySelector('#search-input').click()
                e.stopImmediatePropagation()
                // return 

                });
            }
            // console.log(opted + ' POUCHEINGREDIENT FIN');
            // console.log('_________');
            // console.log(option_choice);
            // console.log('_________')
            document.querySelector('#search-input').click()
        }

        function suppIngredients(opted, eltChoose ) {

            console.log(opted + '-------SUPP INGREDIENT');
            const index = option_choice.indexOf(opted);
            if (index > -1) {
                eltChoose.remove(index, 1);
                option_choice.splice(index, 1); // deuxieme parametre veut dire qu'on supprime un seul elt
            }

        }

    }
// }
}
//  export default rolling

// console.log(appareils_arguments)
// console.log(ingredients_arguments)
// console.log(ustensiles_arguements)