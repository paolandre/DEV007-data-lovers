import { filtroPokemones } from './data.js';

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

//Historia usuario 2
const botonFiltrar = document.getElementById('boton-filtrar');

botonFiltrar.addEventListener('click', () => {
  contenedor.innerHTML = '';
  pokemones.forEach(grass => {
  contenedor.innerHTML += `<p>${pokemon.type}</p>`;
  })
}


  const contenedorBotones = document.getElementById('container_botones');
  contenedorBotones.style.display = "none";
  const principalParrafo = document.getElementById('principal_parrafo');
  principalParrafo.style.display = "none";

  
  //const filtroPokemones = data.filtroPokemones;
  //contenedor.innerHTML += `<p>${filtroPokemones}</p>`;


  

  //¿¿¿¿aqui iria la lista desplegable????
  //<select name="filtro-type">
  //<option value="value1">grass</option>
  //<option value="value2">poison</option>
  //<option value="value3">fire</option>
  //</select>



});




