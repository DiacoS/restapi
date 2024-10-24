const express = require('express');
const morgan = require('morgan');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const port = 3000;

// Middleware til logging
app.use(morgan('dev'));

// Route til Pokémon-API
app.use('/pokemon', pokemonRoutes);

// Route til at servere en simpel HTML-side
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
