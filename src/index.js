import getData from 'getData';

const setData = async () => {
    const character = await getData();

    console.log(character.name);
}

setData();