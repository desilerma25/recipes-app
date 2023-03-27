require('dotenv').config();
const SPOONACULAR_API_SECRET = process.env.SPOONACULAR_API
const baseUrl = 'https://api.spoonacular.com'
// const cors = require('cors');

// var whitelist = ['http://localhost:3000', 'https://recipes-app-gold.vercel.app']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

module.exports = (app) => {

    app.get('/cuisines', (req, res) => {
        res.json([ 
            "african",
            "american",
            "british",
            "cajun",
            "caribbean",
            "chinese",
            "eastern-european",
            "european",
            "french",
            "german",
            "greek",
            "indian",
            "irish",
            "italian",
            "japanese",
            "jewish",
            "korean",
            "latin-american",
            "mediterranean",
            "mexican",
            "middle-eastern",
            "nordic",
            "southern",
            "spanish",
            "thai",
            "vietnamese"
        ])
    });

    app.get('/:cuisine/recipes', (req, res) => {
        fetch(baseUrl + `/recipes/complexSearch?apiKey=${SPOONACULAR_API_SECRET}&cuisine=${req.params.cuisine}`)
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((error) => {
            console.error('error in execution', error)
            res.send(error)
        })
    });

    app.get('/recipe/:id', (req, res) => {
        fetch(baseUrl + `/recipes/${req.params.id}/information?apiKey=${SPOONACULAR_API_SECRET}&includeNutrition=false`)
        .then((response) => response.json())
        .then((data) => res.send({data}))
        .catch((error) => {
            console.error('error in execution', error)
            res.send(error)
        })
    })
};
