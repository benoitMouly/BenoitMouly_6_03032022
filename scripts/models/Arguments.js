class Arguments {
    constructor(recettes) {
        this._recipeAppliance = recettes.appliance
        this._recipeUstensils = recettes.ustensils
        this._recipeIngredients = recettes.ingredients
        // this._recipeIngredientsName = recettes.ingredients.ingredient
        // this._recipeIngredientsQuantity = recettes.ingredients.quantity
        // this._recipeIngredientsUnit = recettes.ingredients.unit

    }



    get recipeAppliance() {
        return this._recipeAppliance
    }

    get recipeUstensils() {
        return this._recipeUstensils
    }

    get recipeIngredients() {
        return this._recipeIngredients
    }

    // get recipeIngredientNested() {
    //     for ( i = 0; i < this._recipeIngredients.length; i++){
    //         console.log('truc')
    //     }
    //     return this._recipeIngredients
    // }
}
// class Recette {
//     constructor(recettes) {
//         recettes.image =  this._imgRecipe
//         recettes.id = this._recipeId
//         recettes.name = this._recipeName
//     }


//     get imgRecipe() {
//         return recettes.image
//     }

//     get recipeId() {
//         return recettes.id
//     }

//     get recipeName() {
//         return recettes.name
//     }

// }