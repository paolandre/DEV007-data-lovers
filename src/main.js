import { filtroPokemones } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaramos variables 
const pokemones = data.pokemon;
const contenedorPokemones = document.getElementById("contenedor_pokemones");
const contenedorBotonesPrincipal = document.getElementById("container_botones_principal");
const principalParrafo = document.getElementById("principal_parrafo");

//Historia de usuario 1
pokemones.forEach((pokemon) => {
  const img = pokemon.img;
  const name = pokemon.name;
  const height = pokemon.size["height"];
  const weight = pokemon.size["weight"];
  const type = pokemon.type.join(", "); //.join funciona para poner elementos entre dos elementos del array
  const baseCaptureRate = pokemon.encounter["base-capture-rate"];

  const card = document.createElement("div");
  card.className = "pokemon-card";
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
    contenedorPokemones.appendChild(card);
});

//Historia usuario 2
const tiposPokemon = document.getElementById("lista-desplegable-filtrar");

const pokemonesGrass = filtroPokemones(data, "grass");
console.log(pokemonesGrass);

















































//Yo trabajo hasta aquí



