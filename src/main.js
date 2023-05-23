
































































import { filtroPokemones, ordenarBaseCaptureRate } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaramos variables 
const pokemones = data.pokemon;
const contenedorPokemones = document.getElementById("contenedor_pokemones");

//Historia de usuario 1
pokemones.forEach((pokemon) => {
  const 

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
/*const pokemonesGrass = filtroPokemones(data, "grass");
console.log(pokemonesGrass); esto nos sirve para comprobar que funciona el filtro*/
const valoresLista = document.getElementById("lista-desplegable-filtrar");
valoresLista.addEventListener("change", () => {
  const valoresTiposdeLista = valoresLista.value;

  const pokemonesFiltrados = filtroPokemones(data, valoresTiposdeLista);
  contenedorPokemones.innerHTML = "";
  pokemonesFiltrados.forEach((pokemon) => {
    const img = pokemon.img;
    const name = pokemon.name;
    const height = pokemon.size["height"];
    const weight = pokemon.size["weight"];
    const type = pokemon.type.join(", ");
    const baseCaptureRate = pokemon.encounter["base-capture-rate"]; const card = document.createElement("div");
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
});


//const tiposPokemon = document.getElementById("lista-desplegable-filtrar");
//const pokemonesGrass = filtroPokemones(data, "grass");
//console.log(pokemonesGrass);


//Historia de usuario 3

//cómo hago para conectar la función con el evento del DOM ?
const ordenarValores = document.getElementById("lista-desplegable-ordenar");
ordenarValores.addEventListener("change", () => {
  const valoresOrdenados = ordenarValores.value;

  const pokemonesOrdenados = ordenarBaseCaptureRate(data, valoresOrdenados);
  contenedorPokemones.innerHTML = "";
  pokemonesOrdenados.forEach((pokemon) => {
    const img = pokemon.img;
    const name = pokemon.name;
    const height = pokemon.size["height"];
    const weight = pokemon.size["weight"];
    const type = pokemon.type.join(", ");
    const baseCaptureRate = pokemon.encounter["base-capture-rate"]; const card = document.createElement("div");
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
});


////////////////////
//TESTING
// function init (){
//export init;









