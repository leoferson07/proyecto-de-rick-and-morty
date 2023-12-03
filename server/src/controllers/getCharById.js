// hacer npm install axios
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
const API_KEY = 'leoferson07';

const getCharById = (res, id) => {
    axios.get (`${URL}/${id}?key=${API_KEY}`)
    //retorna una promesa => pending
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
            location: data.location
        };
       return res
        .writeHead(200, {"content-type": "application/json"})
        .end(JSON.stringify(character));
    })
    .catch(error =>{
       return res
       .writeHead(500, {"content-type": "application/json"})
        .end(JSON.stringify({message: error, message}))
    })
}

module.exports = getCharById;
