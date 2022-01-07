const API = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');


const searchData = async () =>{
    try{
        const number = Math.floor(Math.random() * 826 + 1);
        const promise = await axios.get(`${API}/${number}`);
        const character = promise.data;
        return character;

    }catch(e){
        return null;
    }
}

export default searchData;