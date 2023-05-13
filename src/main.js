import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemones = data.pokemon;

const contenedor = document.getElementById('contenedor');
pokemones.forEach(pokemon => {
  contenedor.innerHTML += `
    <div class= "contenedor_pokemones">
    <h2>${pokemon.num}<h2>
    <img src="${pokemon.img}">
    </div>
    `  
})

console.log(example, data);
