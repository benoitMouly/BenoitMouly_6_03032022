import recipes from './data/data.js';

class App {
    constructor() {
        this.$recetteWrapper = document.querySelector('#recette_section')
        this.$inputWrapper = document.querySelector('#input_arguments');
    }

    async main() {

        const recettesData = recipes;

        //// appliance \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        let appliancesData1 = recettesData.map(appli => appli.appliance);
        let sanitizeAppliancesData = []
        for( let i = 0; i < appliancesData1.length; i++){
            appliancesData1[i] = appliancesData1[i].replace('.', ''); // Retire les points en trop
            appliancesData1[i] = appliancesData1[i].replace('Casserolle', 'Casserole'); // Correctif du mot casserole
            sanitizeAppliancesData.push(appliancesData1[i]);
        }
        // console.log(sanitizeAppliancesData)
        const appliancesData2 = new Set(sanitizeAppliancesData) // Retire les doublons (casserolle / casserole)
        let appliancesData = Array.from(appliancesData2)
        //// appliance \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


        //// ustensiles \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const ustensilsData1 = recettesData.map(ust => ust.ustensils);
        // console.log(ustensilsData1);
        let ustensilsArray = ustensilsData1.flat(); // Create a new array with all the element of the subarrays
        // console.log(ustensilsArray)
        const ustensilsData2 = new Set(ustensilsArray); // On évite les doublons
        let ustensilsData = Array.from(ustensilsData2);  // Et on recréé le tableau
        // console.log(ustensilsData)
        //// ustensiles \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        //// ingredients \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const ingredientsData1 = recettesData.map(ingr => ingr.ingredients);
        // const filteredIngredients = ingredientsData.map(ingro => ingro[0].ingredient)
        let ingredientsData2 = ingredientsData1.flat();// Create a new array with all the element of the subarrays
        let ingredientsData3 = ingredientsData2.map(ingro => ingro.ingredient); // On récupère la clé ingredient
        let ingredientsData4 = new Set(ingredientsData3) // Retire les doublons (casserolle / casserole)
        let ingredientsData = Array.from(ingredientsData4) 
        // console.log(ingredientsData)
        //// ingredients \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


        recettesData
        .map(recette => new Recette(recette))
        .forEach(recette => {
            
                const TemplateRecetteCard = new RecetteCard(recette)
                this.$recetteWrapper.appendChild(
                    TemplateRecetteCard.createRecetteCard()
                )
            })

            const input = new RecetteArguments(ingredientsData, appliancesData, ustensilsData);
            input.createRecetteInput()
            AddArguments.init()
    }


}
const app = new App()
app.main()
