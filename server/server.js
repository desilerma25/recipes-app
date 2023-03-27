const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/searchRecipeRoutes')(app);
const PORT = process.env.PORT || 8000;

app.use((req, res) => {
    const allowedOrigins = ['http://localhost:3000', 'https://recipes-app-gold.vercel.app'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
});
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, this is the homepage of the server!"})
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000')
});