class PetitsPlatsApi{
    /**
     * 
     * @param {string} res
     */
    
    async getRecettes() {
        return fetch("scripts/data/data.js")
        .then(res => {
            res.text().then(recettes => {
                eval(recettes)
                console.log(recettes)
            })
        })
    }
}