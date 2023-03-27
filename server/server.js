const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/searchRecipeRoutes')(app);
const PORT = process.env.PORT || 8000;

var whitelist = ['http://localhost:3000', 'https://recipes-app-gold.vercel.app']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, this is the homepage of the server!"})
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000')
});