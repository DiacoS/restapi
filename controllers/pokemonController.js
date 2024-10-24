const pokemonModel = require('../models/pokemonModel');

// Hent data om Pokémon baseret på navn
exports.getPokemonData = async (req, res) => {
    const pokemonName = req.params.name.toLowerCase();
    try {
        const pokemonData = await pokemonModel.fetchPokemon(pokemonName);
        res.json(pokemonData);
    } catch (error) {
        res.status(404).json({ message: 'Pokémon ikke fundet' });
    }
};
