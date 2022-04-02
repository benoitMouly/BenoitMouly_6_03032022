
class AddArguments {
    /* Block pour chacun des input */
    static init(){ 
        let colIngredients = document.querySelector('#col-ingredients');
        let colAppareils = document.querySelector('#col-appareils');
        let colUstensiles = document.querySelector('#col-ustensiles');

        /* Tout les block input dans un array */
        let widz = document.querySelectorAll('.widz');

        /* Input */ 
        let datalistIngredients = document.querySelector('#dataingredients');
        let datalistUstensiles = document.querySelector('#dataustensiles');
        let datalistAppareils = document.querySelector('#dataappareil');

        /* Liste des input */
        let bowser = document.querySelectorAll('.browsers');

        /* Overlay */ 
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');

        /* Chevrons */
        let chevron_ingr = document.querySelector('.chevron-ingredients');
        let chevron_app = document.querySelector('.chevron-appliances');
        let chevron_ust = document.querySelector('.chevron-ustensils');
        // let supp_choose = null;

        /* Initilisation de l'array pour récupérer les datas des input */
        let arré = [];
        let ingredientsChoose = []; // récupére les choix de l'input

        /* Création/récupération des elements permettant d'intégrer les choix */
        let $searchInput = document.querySelector('.search-input');
        let $inputArguments = document.querySelector('#input_arguments')
        let $choicesWrapper = document.createElement('div');
        $choicesWrapper.classList.add('row', 'choices-wrapper');
        $searchInput.parentNode.insertBefore($choicesWrapper, $inputArguments);





        /*
        Input ingredients
        */

        inputingredients.onfocus = function () {

            dataingredients.style.display = 'block';
            inputingredients.style.borderRadius = "5px 5px 0 0";
            colIngredients.classList.add('col-6');
            colIngredients.classList.remove('col-2');
            chevron_ingr.classList.remove('bi-chevron-down');
            chevron_ingr.classList.add('bi-chevron-up');
            colIngredients.after(overlay);
            overlay.style.display= 'block';
            colIngredients.style.zIndex = '101';
            
        };

        for (let option of dataingredients.options) {
            option.onclick = function (e) {
            inputingredients.value = option.value;
            ingredientsChoose.push(inputingredients.value)
            e.preventDefault()
            /*
            * On passe la fonction qui va récupérer les éléments des input
            /* */
            pushIngredients(inputingredients.value)
            dataingredients.style.display = 'none';
            inputingredients.style.borderRadius = "5px";
            colIngredients.classList.add('col-2');
            colIngredients.classList.remove('col-6');
            chevron_ingr.classList.add('bi-chevron-down');
            chevron_ingr.classList.remove('bi-chevron-up');
            overlay.style.display= 'none';
            colIngredients.style.zIndex = '9';

            }
        };

        inputingredients.oninput = function() {
            currentFocus = -1;
            var text = inputingredients.value.toUpperCase();
            for (let option of dataingredients.options) {
                if(option.value.toUpperCase().indexOf(text) > -1){
                    option.style.display = "block";
                }else{
                option.style.display = "none";
                overlay.style.display= 'none';
                // colIngredients.style.zIndex = '9';
            }
            };
        }

        var currentFocus = -1;
        inputingredients.onkeydown = function(e) {
            if(e.keyCode == 40){
            currentFocus++
            addActive(dataingredients.options);
            }
            else if(e.keyCode == 38){
            currentFocus--
            addActive(dataingredients.options);
            }
            else if(e.keyCode == 13){
            e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (dataingredients.options) dataingredients.options[currentFocus].click();
                }
            }
        }


        /*
        Input appareil
        */


        inputappareil.onfocus = function () {
            dataappareil.style.display = 'block';
            inputappareil.style.borderRadius = "5px 5px 0 0";
            colAppareils.classList.add('col-6');
            colAppareils.classList.remove('col-2');
            chevron_app.classList.remove('bi-chevron-down');
            chevron_app.classList.add('bi-chevron-up');
            colAppareils.after(overlay);
            overlay.style.display= 'block';
            colAppareils.style.zIndex = '101';  
        };

        for (let option of dataappareil.options) {
            option.onclick = function () {
            inputappareil.value = option.value;
            ingredientsChoose.push(inputappareil.value)
            /*
            * On passe la fonction qui va récupérer les éléments des input
            /* */
            pushIngredients(inputappareil.value)
            dataappareil.style.display = 'none';
            inputappareil.style.borderRadius = "5px";
            colAppareils.classList.add('col-2');
            colAppareils.classList.remove('col-6');
            chevron_app.classList.add('bi-chevron-down');
            chevron_app.classList.remove('bi-chevron-up');
            overlay.style.display= 'none';
            colAppareils.style.zIndex = '9';


            }

        };

        inputappareil.oninput = function() {
            currentFocus = -1;
            var text = inputappareil.value.toUpperCase();
            for (let option of dataappareil.options) {
            if(option.value.toUpperCase().indexOf(text) > -1){
                option.style.display = "block";
            }else{
                option.style.display = "none";
            
            }
            };
        }
        var currentFocus = -1;
        inputappareil.onkeydown = function(e) {
            if(e.keyCode == 40){
            currentFocus++
            addActive(dataappareil.options);
            }
            else if(e.keyCode == 38){
            currentFocus--
            addActive(dataappareil.options);
            }
            else if(e.keyCode == 13){
            e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (dataappareil.options) dataappareil.options[currentFocus].click();
                }
            }
        }



        /*
        Input ustensiles
        */


        inputustensiles.onfocus = function () {
            dataustensiles.style.display = 'block';
            inputustensiles.style.borderRadius = "5px 5px 0 0";
            colUstensiles.classList.add('col-6');
            colUstensiles.classList.remove('col-2');
            chevron_ust.classList.remove('bi-chevron-down');
            chevron_ust.classList.add('bi-chevron-up');
            colUstensiles.after(overlay);
            overlay.style.display= 'block';
            colUstensiles.style.zIndex = '101';
        };

        for (let option of dataustensiles.options) {
            option.onclick = function () {
            inputustensiles.value = option.value;
            ingredientsChoose.push(inputustensiles.value)
            /*
            * On passe la fonction qui va récupérer les éléments des input
            /* */
            pushIngredients(inputustensiles.value)
            dataustensiles.style.display = 'none';
            colUstensiles.classList.add('col-2');
            colUstensiles.classList.remove('col-6');
            chevron_ust.classList.add('bi-chevron-down');
            chevron_ust.classList.remove('bi-chevron-up');
            overlay.style.display= 'none';
            colUstensiles.style.zIndex = '9';


            }

        };

        inputustensiles.oninput = function() {
            currentFocus = -1;
            var text = inputustensiles.value.toUpperCase();
            for (let option of dataustensiles.options) {
            if(option.value.toUpperCase().indexOf(text) > -1){
                option.style.display = "block";
            }else{
                option.style.display = "none";
            }
            };
        }

        var currentFocus = -1;
        inputustensiles.onkeydown = function(e) {
            if(e.keyCode == 40){
            currentFocus++
            addActive(dataustensiles.options);
            }
            else if(e.keyCode == 38){
            currentFocus--
            addActive(dataustensiles.options);
            }
            else if(e.keyCode == 13){
            e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (dataustensiles.options) dataustensiles.options[currentFocus].click();
                }
            }
        }

        /*
        * @Function qui permet de faire le toggle et les input active
        */

        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("active");
            }
            function removeActive(x) {
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("active");
                }
            }

        /*
        * @Function qui permet de gérer les ouvertures et fermeture des input, ajout d'un overlay pour restreindre la portée des clicks
        */
        function toogleInput(event){
            let papa = event.target;
            let fiston = papa.nextElementSibling;
            let grandpapa = papa.closest('.widz');
            // console.log(fiston)

            if (papa.matches('.input-elt')) {
                    event.target.onclick = function(){
                    arré.push(papa, grandpapa, fiston);
                }
                // console.log(arré);
                // console.log(grandpapa)
            }
            if(papa.matches('#overlay') && arré.length > 0){
                overlay.style.display= 'none';
                let eltSup = arré.filter(function(element){ return element.classList.contains("col-toggle"); });
                let eltGrp = arré.filter(function(element){ return element.classList.contains("widz"); });
                for ( let i = 0; i < eltGrp.length; i++){
                    eltGrp[i].classList.add('col-2');
                    eltGrp[i].classList.remove('col-6');
                    chevron_ingr.classList.add('bi-chevron-down');
                    chevron_ingr.classList.remove('bi-chevron-up');
                    chevron_app.classList.add('bi-chevron-down');
                    chevron_app.classList.remove('bi-chevron-up');
                    chevron_ust.classList.add('bi-chevron-down');
                    chevron_ust.classList.remove('bi-chevron-up');
                }
                bowser.forEach(bow => {
                    bow.style.display = 'none';
                });
                widz.forEach(wid => {
                    wid.style.zIndex = '9';
                }
                    )
                arré = [];
                eltSup = [];

            }
        }

        function pushIngredients(opted){
                let eltChoose = document.createElement('div');
                eltChoose.classList.add('elt-choose', 'col-2');
                $choicesWrapper.appendChild(eltChoose)
                eltChoose.innerHTML = `<p>${opted}</p> <i class="bi bi-x-circle supp-choose"></i>`
                let supp_choose = document.querySelectorAll('.supp-choose');
                
                // let everyChoose = document.querySelectorAll('.elt-choose');

                console.log(ingredientsChoose + ' ----------------------------- ')
                console.log(opted + ' poucheingredient')

                for(let i = 0; i < supp_choose.length; i++){
                    supp_choose[i].addEventListener('click', function(e){
                        e.stopImmediatePropagation();
                        suppIngredients(opted, eltChoose)})
                }
                console.log(opted + ' POUCHEINGREDIENT FIN')
                // supp_choose.addEventListener('click', suppIngredients.bind('click', opted, eltChoose))
        }

        function suppIngredients(opted, eltChoose){
            // e.preventDefault()
            console.log(opted + '-------SUPP INGREDIENT');
            const index = ingredientsChoose.indexOf(opted);
            if (index > -1) {
                eltChoose.remove(index, 1);
                ingredientsChoose.splice(index, 1); // 2nd parameter means remove one item only 
            }

                console.log(ingredientsChoose)


        }

        // Ajout de l'event listener au document

        document.addEventListener('click', toogleInput);
        
    }
}