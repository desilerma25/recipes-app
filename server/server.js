const express = require('express');
const cors = require('cors');
const config = require('dotenv').config()
const SPOONACULAR_API = process.env.SPOONACULAR_API

const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello, this is the server!"})
});

app.listen(8000, () => {
    console.log('Server is running on port 8000')
});