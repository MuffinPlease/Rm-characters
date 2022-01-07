const API = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const searchData = async () => {
    try {
        const number = Math.floor(Math.random() * 826 + 1);
        const promise = await axios.get(`${API}/${number}`);
        return promise.data;
    } catch (e) {
        return null;
    }
};

module.exports = searchData;