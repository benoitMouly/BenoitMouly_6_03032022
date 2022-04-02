class Recette {
    constructor(recettes) {
        this._imgRecipe = recettes.image
        this._recipeId = recettes.id
        this._recipeName = recettes.name
        this._recipeTime = recettes.time
        this._recipeDesc = recettes.description
        this._recipeIngredients = recettes.ingredients
        // this._recipeIngredientsName = recettes.ingredients.ingredient
        // this._recipeIngredientsQuantity = recettes.ingredients.quantity
        // this._recipeIngredientsUnit = recettes.ingredients.unit

        
    

    }


    get imgRecipe() {
        return this._image
    }

    get recipeId() {
        return this._id
    }

    get recipeName() {
        return this._recipeName
    }

    get recipeTime() {
        return this._recipeTime
    }

    get recipeDesc() {
        return this._recipeDesc
    }

    get recipeIngredients() {
        return this._recipeIngredients
    }

    get recipeIngredientsName() {
        return this._recipeIngredientsName
    }
    get recipeIngredientsQuantity() {
        return this._recipeIngredientsQuantity
    }
    get recipeIngredientsUnit() {
        return this._recipeIngredientsUnit
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