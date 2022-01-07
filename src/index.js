const searchData = require('./utils/getData');

const setData = async () => {
    return await searchData();
};

setData().then(result => console.log(result)).catch(reason => console.error(reason));