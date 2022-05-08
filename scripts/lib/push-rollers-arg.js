// import this.recipes from '../data/data.js';
class insertArgsRoller{
    constructor(recipes){
        this.recipes = recipes
    }

    insertArgs() {

        let ingredients_arguments = [];
        let appareils_arguments = [];
        let ustensiles_arguments = [];
        
        let ingredient_unique = null;
        let appareil_unique = null;
        let ustensile_unique = null;
        let opt = null;
        let parent_ingredients = document.querySelector('#dataingredientslist');
        let parent_appareils = document.querySelector('#dataappareilslist');
        let parent_ustensiles = document.querySelector('#dataustensileslist');
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');                                                                                                                      // récupération des choix

    

        for(let i = 0; i < this.recipes.length; i++){                                                                                            // On push dans les différents tableaux
            let recipe = this.recipes[i];
            appareils_arguments.push(recipe.appliance)

            for(let a = 0; a < recipe.ingredients.length; a++){
                ingredients_arguments.push(recipe.ingredients[a].ingredient)
            }

            for(let b = 0; b < recipe.ustensils.length; b++){

                ustensiles_arguments.push(recipe.ustensils[b])

            }

        }

        this.removeDuplicates(ustensiles_arguments);
        this.removeDuplicates(appareils_arguments);
        this.removeDuplicates(ingredients_arguments);




        for(let c = 0; c < ingredients_arguments.length; c++){
            ingredient_unique = ingredients_arguments[c]
            opt = document.createElement('option')
            opt.setAttribute('class', 'bg-primary text-white option-elt')
            opt.setAttribute('value', ingredient_unique)
            opt.innerHTML = ingredient_unique;
            parent_ingredients.appendChild(opt);

        }

        for(let d = 0; d < appareils_arguments.length; d++){
            appareil_unique = appareils_arguments[d]
            opt = document.createElement('option')
            opt.setAttribute('class', 'bg-success text-white option-elt')
            opt.setAttribute('value', appareil_unique)
            opt.innerHTML = appareil_unique;
            parent_appareils.appendChild(opt);

        }





        for(let e = 0; e < ustensiles_arguments.length; e++){

            ustensile_unique = ustensiles_arguments[e]
            opt = document.createElement('option')
            opt.setAttribute('class', 'bg-danger text-white option-elt')
            opt.setAttribute('value', ustensile_unique)
            opt.innerHTML = ustensile_unique;
            parent_ustensiles.appendChild(opt);

        }

    }
     removeDuplicates(array) {
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
//  export default rolling

// console.log(appareils_arguments)
// console.log(ingredients_arguments)
// console.log(ustensiles_arguements)