class PetitsPlatsApi{
    /**
     * 
     * @param {string} res
     */


    // async getRecettes() {
    //     return fetch("scripts/data/data.js")
    //     .then(res => JSON.stringify(res))
    //     // .then(res => res.json())
    //     .then(res => console.log(res))
    //     .then(res => res.recettes)
    //     .catch(err => console.log('an error occurs', err))
    // }

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