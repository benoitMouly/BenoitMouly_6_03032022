import recipes from './data/data.js';

class App {
    constructor() {
        this.$recetteWrapper = document.querySelector('#recette_section')
        this.$inputWrapper = document.querySelector('#input_arguments');
        this.$searchInput = document.querySelector('#search-input');
        this.$rollersWrapper = document.querySelector('.choices-wrapper')
        this.$scrollIngr = document.querySelector('#inputingredients');
        this.$col = document.querySelector('#col-ingredients');
        this.$scrollingApp = document.querySelector('#inputappareil');
        this.$scrollingUst = document.querySelector('#inputustensiles');
        this.$scrollers = document.querySelectorAll('.input-elt')
        this.rollers = [];
        this.$search_elt = document.querySelectorAll('.search-element');
        this.$option_elt = document.getElementsByClassName('option-elt');

    }

    async main(e) {

        const recettesData = recipes;
        console.log(this.$rollersWrapper)
        // /* appliance  */
        // let appliancesData1 = recettesData.map(appli => appli.appliance);
        // let sanitizeAppliancesData = []
        // for( let i = 0; i < appliancesData1.length; i++){
        //     appliancesData1[i] = appliancesData1[i].replace('.', '');                                                                           // Retire les points en trop
        //     appliancesData1[i] = appliancesData1[i].replace('Casserolle', 'Casserole');                                     // Correctif du mot casserole
        //     sanitizeAppliancesData.push(appliancesData1[i]);
        // }
        // const appliancesData2 = new Set(sanitizeAppliancesData)                                                                // Retire les doublons (casserolle / casserole)



        // /* ustensils */
        // const ustensilsData1 = recettesData.map(ust => ust.ustensils);
        // let ustensilsArray = ustensilsData1.flat();                                                                                                      // Create a new array with all the element of the subarrays
        // const ustensilsData2 = new Set(ustensilsArray);                                                                                     // On évite les doublons
        //                                                                      // Et on recréé le tableau

        // /* ingredients */
        // const ingredientsData1 = recettesData.map(ingr => ingr.ingredients);
        // let ingredientsData2 = ingredientsData1.flat();                                                                                         // Create a new array with all the element of the subarrays
        // let ingredientsData3 = ingredientsData2.map(ingro => ingro.ingredient);                                         // On récupère la clé ingredient
        // let ingredientsData4 = new Set(ingredientsData3)                                                                                    // Retire les doublons (casserolle / casserole)
        // let ingredientsData = Array.from(ingredientsData4) 
                                                                                                                                                                                            // console.log(ingredientsData)

        recettesData
        .map(recette => new Recette(recette))
        .forEach(recette => {
                const TemplateRecetteCard = new RecetteCard(recette)
                this.$recetteWrapper.appendChild(
                    TemplateRecetteCard.createRecetteCard()
                )
            })

            const Filter = new FilterForm(recettesData)
            const  Rollers = new insertArgsRoller(recettesData)
            Rollers.insertArgs();

            for(let i = 0; i < this.$search_elt.length; i ++){
                this.$search_elt[i].addEventListener('click', function(e){
                    Filter.render(e)
                })
            }

            this.$searchInput.addEventListener('input', function(e){
                Filter.render(e)

            })
        }

}
const app = new App()
app.main()
