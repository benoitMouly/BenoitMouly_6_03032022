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
