const express = require('express');
const corsMiddleware = require('./config/cors');
const app = express();
const PORT = process.env.PORT || 8000;
require('./routes/searchRecipeRoutes')(app);

app.use(express.json());
app.use(corsMiddleware);

app.get('/', (req, res) => {
    res.json({ message: "Hello, this is the homepage of the server!"})
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000')
});