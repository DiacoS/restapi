const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const router = express.Router();

router.get('/:name', pokemonController.getPokemonData);

module.exports = router;
