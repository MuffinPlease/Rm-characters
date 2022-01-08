import '@styles/main.css'

const API = process.env.API;

const searchData = async () =>{
    try{
        const number = Math.floor(Math.random() * 826 + 1);

        const res = await fetch(`${API}/${number}`);
        const character = await res.json();
        return character;

    }catch(e){
        console.log(e);
        return null;
    }
}


const setData = async() => {
    const character = await searchData();
    const content = document.querySelector('.content');

    // Variables
    const name = character.name;
    const img = character.image;
    const status = character.status;
    const gender = character.gender;
    const species = character.species;

    content.innerHTML += 
    ` <img src="${img}" alt="${name}">
    <p class="name">${name}</p>
    <p><b>Status: </b>${status}</p>
    <p><b>Gender: </b>${gender}</p>
    <p><b>Species:  </b>${species}</p>`;
}

setData();