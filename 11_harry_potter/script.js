const characters = document.querySelector('#characters')
//console.log(characters);

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json'

window.addEventListener('DOMContentLoaded', fetchCharacters)

async function fetchCharacters() {
    try {
        const res = await fetch(HP_URL)
        //console.log(res);

        const chars = await res.json()
        //console.log(chars);
        
        displayCharacters(chars)
    } catch (error) {
        alert(error)
    }
}

function displayCharacters(chars) {
    //console.log(chars);
    
    chars.forEach(char => {
        
    });
}