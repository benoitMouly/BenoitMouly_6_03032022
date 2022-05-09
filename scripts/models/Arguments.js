class Arguments {
    constructor(recettes) {
        this._recipeAppliance = recettes.appliance
        this._recipeUstensils = recettes.ustensils
        this._recipeIngredients = recettes.ingredients
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

}
