require('dotenv').config();
const SPOONACULAR = process.env.SPOONACULAR_KEY
const baseUrl = 'https://api.spoonacular.com'
const corsMiddleware = require('../config/cors');


module.exports = (app) => {
    app.use(corsMiddleware);

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
        fetch(baseUrl + `/recipes/complexSearch?apiKey=${SPOONACULAR}&cuisine=${req.params.cuisine}/`)
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((error) => {
            console.error('error in execution', error)
            res.send(error)
        })
    });

    app.get('/recipe/:id', (req, res) => {
        fetch(baseUrl + `/recipes/${req.params.id}/information?apiKey=${SPOONACULAR}&includeNutrition=false/`)
        .then((response) => response.json())
        .then((data) => res.json({data}))
        .catch((error) => {
            console.error('error in execution', error)
            res.send(error)
        })
    })
};
