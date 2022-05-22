class FilterInput{
    constructor(recipes){
        this.recipes = recipes
    }


selectValue(rolling, option_choice, cursor) {

    let $choicesWrapper = document.querySelector('.choices-wrapper');
    let overlay = document.querySelector('.overlay')
        // console.log(option_choice)
        rolling.stopImmediatePropagation();
        rolling = rolling.target
        console.log(rolling);
        let test = rolling.setAttribute('aria-expanded', 'true')
        // // test == true
        // console.log(test)
        let after_input = rolling.nextSibling;
        let datalist = after_input.nextElementSibling;
        let datalistId = datalist.id
        console.log(datalistId)
        let main_parent = rolling.closest('.widz'); // main_parent se réfère à l'id (exemple ; " #col-appareil ")
        let chevron = rolling.nextElementSibling.querySelector('.bi'); // réfère au chevron le plus proche de rolling ( qui est le bouton )    
        datalist.style.display = 'block'; // datalist se réfère à la datalist
        // console.log(datalist)
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
            pushIngredients(rolling.value);
            rolling.value = null // On masque le value de l'input 
            // console.log(option_choice)
            datalist.style.display = 'none';
            rolling.style.borderRadius = "5px";
            main_parent.classList.add('col-2');
            main_parent.classList.remove('col-6');
            chevron.classList.add('bi-chevron-down');
            chevron.classList.remove('bi-chevron-up');
            overlay.style.display = 'none';
            main_parent.style.zIndex = '9';
            test = rolling.setAttribute('aria-expanded', 'false') // On remet l'aria expanded en false comme il se ferme


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
                    // Et on simule le click sur l'item active
                    if (datalist.options)
                        datalist.options[currentFocus].click();
                }
            }
        }
        };

        function pushIngredients(opted) {
            
            let eltChoose = document.createElement('div');
            if(datalist.id === 'dataappareilslist'){
                eltChoose.classList.add('elt-choose', 'col-2', 'bg-success');
            } 
            else if(datalist.id === 'dataustensileslist'){
            eltChoose.classList.add('elt-choose', 'col-2', 'bg-danger');
            } else if(datalist.id === 'dataingredientslist'){
                eltChoose.classList.add('elt-choose', 'col-2', 'bg-primary');
            }
            $choicesWrapper.appendChild(eltChoose);
            eltChoose.innerHTML = `<p class="opted">${opted}</p> <i class="bi bi-x-circle supp-choose option-elt search-element"></i> `;
            let supp_choose = document.querySelectorAll('.supp-choose');
           cursor = document.querySelector('.hovered')
           console.log(cursor)
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
}

// console.log(appareils_arguments)
// console.log(ingredients_arguments)
// console.log(ustensiles_arguements)