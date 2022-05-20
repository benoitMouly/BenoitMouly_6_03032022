class Recette {
    constructor(recettes) {
        this._imgRecipe = recettes.image
        this._recipeId = recettes.id
        this._recipeName = recettes.name
        this._recipeTime = recettes.time
        this._recipeDesc = recettes.description
        this._recipeIngredients = recettes.ingredients
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
}