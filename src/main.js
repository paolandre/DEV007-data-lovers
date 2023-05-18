import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

//Primera historia de usuario
const pokemones = data.pokemon;
const contenedor = document.getElementById('contenedor');

pokemones.forEach(pokemon => {
    const img = pokemon.img;
    const name = pokemon.name;
    const height = pokemon.size['height'];
    const weight = pokemon.size['weight'];
    const type = pokemon.type;
    const baseCaptureRate = pokemon.encounter['base-capture-rate'];
    

  const card = document.createElement('div');
  card.className = 'pokemon-card';
  card.innerHTML = `
    <img src="${img}" alt="${name}">
    <h3>${name}</h3>
    <div class="cardp">
        <p>Height: ${height}</p>
        <p>Weight: ${weight}</p>
        <p>Base Capture Rate: ${baseCaptureRate}</p>
        <p>Type: ${type}</p>
    </div>
  `;

  contenedor.appendChild(card);
});

