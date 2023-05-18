const axios = require("axios")

const getCharById = (res, id) => {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((character) => character.data)
    
    const obj = {
        id: Number(id),
        name: character.name,
        gender: character.gender,
        species: character.species,
        origin: character.origin,
        image: character.image,
        status: character.status
    }
    

};
export default getCharById;
