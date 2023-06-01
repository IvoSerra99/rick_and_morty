const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
     
    try {
        const {id} = req.params
        const {data} = await axios.get(`${URL}/${id}`)
       
       if(data){
        let obj ={
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,  
            gender: data.gender
          
        }
        return res.status(200).json(obj)
    }
        return res.status(404).send("Not Found")
    } catch (error) {
        res.status(500).send(error.message)
    }
   
}

module.exports = {
    getCharById,
};
