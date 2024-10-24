const axios = require('axios');

// Hent Pokémon-data fra PokeAPI
exports.fetchPokemon = async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = response.data;

    return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(typeInfo => typeInfo.type.name),
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
    };
};
