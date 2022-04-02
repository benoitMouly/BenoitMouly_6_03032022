class RecetteArguments{

    constructor(ingredientsData, appliancesData, ustensilsData) {
        this._ingredientsData = ingredientsData
        this._appliancesData = appliancesData
        this._ustensilsData = ustensilsData
        this.$wrapper = document.getElementById('input_arguments');
    }

    createRecetteInput() {

        const recetteInput = `
        <div class="col-2 widz" id="col-ingredients">
        <div class="inpoute">
        <input class="bg-primary text-white input-elt" autocomplete="off" role="combobox" list="" id="inputingredients" name="dataingredients" placeholder="Ingrédients"><span class="chevron-input"><i class="bi chevron-ingredients bi-chevron-down"></i></span>
            <datalist id="dataingredients" role="listbox" class="browsers bg-primary text-white">${this._ingredientsData.map(ingredientObj => this.addArgumentsIngredient(ingredientObj)).join("")}
            </datalist>
        </div>
    </div>

    <div class="col-2 widz" id="col-appareils">
        <div class="inpoute">
        <input  class="bg-success text-white input-elt" autocomplete="off" role="combobox" list="" id="inputappareil" name="dataappareil" placeholder="Appareils"><span class="chevron-input"><i class="bi chevron-appliances bi-chevron-down"></i></span>
            <datalist id="dataappareil" role="listbox" class="browsers bg-success text-white">${this._appliancesData.map(applianceObj => this.addArgumentsAppliance(applianceObj)).join("")}
            </datalist>
        </div>
    </div>

    <div class="col-2 widz" id="col-ustensiles">
        <div class="inpoute">
        <input class="bg-danger text-white input-elt" autocomplete="off" role="combobox" list="" id="inputustensiles" name="dataustensiles" placeholder="Ustensiles"><span class="chevron-input"><i class="bi chevron-ustensils bi-chevron-down"></i></span>
            <datalist id="dataustensiles" role="listbox" class="browsers bg-danger text-white">${this._ustensilsData.map(ustensilsObj => this.addArgumentsUstensils(ustensilsObj)).join("")}
            </datalist>
        </div>
    </div>
        
        `
        this.$wrapper.innerHTML = recetteInput

        return this.$wrapper
    }


    /* 
    ${this._recette.recipeIngredients.map(ingredientObj => this.addIngredient(ingredientObj)).join("")}
    ** On parcours le tableau des ingredient, l'indicatif est ingredientObj. Pour chaque indicatif, on fait passer la fonction addIngredient
    ** Qui rajoute le nom (ingredient), la quantité si il y a , et l'unité si il y a 
    */

    addArgumentsIngredient(ingredientObj) {
        let passIngredient = `<option class="bg-primary text-white" value="${ingredientObj}">${ingredientObj}</option>`
        return passIngredient
    }
    addArgumentsAppliance(applianceObj) {
        let passAppliance = `<option class="bg-success text-white" value="${applianceObj}">${applianceObj}</option>`
        return passAppliance
    }
    addArgumentsUstensils(ustensilsObj) {
        let passUstensils = `<option class="bg-danger text-white" value="${ustensilsObj}">${ustensilsObj}</option>`
        return passUstensils
    }

}

