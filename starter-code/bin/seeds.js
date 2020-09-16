const celebModel = require('../models/celebrity.js')

const celebrities = [
    {
        name: "Michael Jackson",
    occupation: "Singer",
    catchPhrase: "hiiiiiihi oooooooooow" 
    },
    {
        name: "Silvio Santos",
    occupation: "TV host",
    catchPhrase:  "má oe"
    },
    {
        name: "Faustão",
    occupation: "TV host",
    catchPhrase: "oloko meu" 
    }

]

await celebSchema.create(celebrities)
    .then()

