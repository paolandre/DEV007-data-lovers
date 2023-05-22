import data from "./data/pokemon/pokemon.js";
//import {getBaseCaptureRateInOrder} from "./data.js";


//Historia de usuario 1
const pokemones = data.pokemon;
const contenedorPokemones = document.getElementById("contenedor_pokemones");
const contenedorBotones = document.getElementById("contenedor_botones");
const principalParrafo = document.getElementById("principal_parrafo");


pokemones.forEach((pokemon) => {
  const img = pokemon.img;
  const name = pokemon.name;
  const height = pokemon.size["height"];
  const weight = pokemon.size["weight"];
  const type = pokemon.type;
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






































































//trabajar a partir de la línea 101
//Historia de usuario 3
const botonOrdenar = document.getElementById("boton-ordenar");
botonOrdenar.addEventListener("click", () => {
  //cómo hago para conectar la función con el evento del DOM ?
  //console.log(getBaseCaptureRateInOrder.sort)
  contenedorPokemones.innerHTML = "";
  contenedorBotones.style.display = "none";
  principalParrafo.style.display = "none";

  const botonesOrdenar = document.createElement("div");
  botonesOrdenar.className = "contenedor-botones-ordenar";
  botonesOrdenar.innerHTML = `
    <p class = "parrafo-ordenar">Sort the pokemons according to their probability of capture.</p>
    <button class = "boton-ordenar">From lower to higher<button>
    <button class = "boton-ordenar">From higher to lower<button>
  `;
  contenedorPokemones.appendChild(botonesOrdenar);

  //pokemones.forEach((pokemon) => {
    
  //}
})















////////////////////////////////////
//PRUEBA TESTING!

// function init (){

// //Primera historia de usuario
// const pokemones = data.pokemon;
// const contenedorPokemones = document.getElementById("contenedor_pokemones");
// const contenedorBotones = document.getElementById("container_botones");
// const principalParrafo = document.getElementById("principal_parrafo");


// pokemones.forEach((pokemon) => {
//   const img = pokemon.img;
//   const name = pokemon.name;
//   const height = pokemon.size["height"];
//   const weight = pokemon.size["weight"];
//   const type = pokemon.type;
//   const baseCaptureRate = pokemon.encounter["base-capture-rate"];

//   const card = document.createElement("div");
//   card.className = "pokemon-card";
//   card.innerHTML = `
//     <img src="${img}" alt="${name}">
//     <h3>${name}</h3> 
//     <div class="cardp">
//         <p>Height: ${height}</p>
//         <p>Weight: ${weight}</p>
//         <p>Base Capture Rate: ${baseCaptureRate}</p>
//         <p>Type: ${type}</p>
//     </div>
//   `;

//   contenedorPokemones.appendChild(card);
// });
// }


//export init;