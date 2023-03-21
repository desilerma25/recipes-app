require('dotenv').config()
const express = require('express');
const cors = require('cors');
const SPOONACULAR_API = process.env.SPOONACULAR_API

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, this is the homepage of the server!"})
});

app.get('/message', (req, res) => {
    res.json({ message: "Hello, this is the server!"})
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000')
});