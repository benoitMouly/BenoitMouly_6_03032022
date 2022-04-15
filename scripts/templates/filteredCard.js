class FilteredCard{

    constructor(recette) {
        this._recette = recette
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('col')
        this.$wrapper.classList.add('mb-4')
    }

    createRecetteCard() {

        const recetteCard = `
        
        <div class="card">
        <div class="card-img-top" src="" alt="Card image cap"></div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col"><h5 class="card-title recipe-title">${this._recette.name}</h5></div>
                    <div class="col"><p class="card-text recipe-time"><i class="bi bi-clock"></i> ${this._recette.time} min</p></div>
                </div>
                <div class="row recipe-text">
                    <div class="col-6"><ul class="card-text recipe-ingredients">${this._recette.ingredients.map(ingredientObj => this.addIngredient(ingredientObj)).join("")}</ul>
                    </div>
                    <div class="col-6"><p class="card-text recipe-desc">${this._recette.description}</p></div>
                </div>
            </div>
        </div>
        
        `
        this.$wrapper.innerHTML = recetteCard

        return this.$wrapper
    }


    /* 
    ${this._recette.recipeIngredients.map(ingredientObj => this.addIngredient(ingredientObj)).join("")}
    ** On parcours le tableau des ingredient, l'indicatif est ingredientObj. Pour chaque indicatif, on fait passer la fonction addIngredient
    ** Qui rajoute le nom (ingredient), la quantité si il y a , et l'unité si il y a 
    */

    addIngredient(ingredientObj) {
        let passIngredient = `<li><span class="ingredient-name">${ingredientObj.ingredient}</span>`
        if (ingredientObj.quantity) {
            passIngredient += ': ' + ingredientObj.quantity
        }

        if (ingredientObj.unit) {
            passIngredient += ' ' + ingredientObj.unit
        }

        passIngredient += `</li>`
        return passIngredient

    }

}

