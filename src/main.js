import { filtroPokemones, tarjetaPokemon } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaramos variables que vamos a usar
const pokemones = data.pokemon;
const contenedorPokemones = document.getElementById("contenedor_pokemones");
const logoPokemon = document.getElementById("imagenLogoPokemon");

//Historia de usuario 1
// Visualización de los pokemones con el método .forEach
pokemones.forEach((pokemon) => {
  //se usa el metodo forEach para ir por cada pokemon y ejecutar la función que los muestra
  const card = tarjetaPokemon(pokemon);
  contenedorPokemones.appendChild(card);
  //appendChild se usa para mostrar la tarjeta en el html (contenedor_pokemones)
  //el forEach hace que el proceso de crear una tarjeta se repita con cada pokemon
  //la tarjeta creada la traemos de data.js
});







//Historia usuario 2
/*const pokemonesGrass = filtroPokemones(data, "grass");
console.log(pokemonesGrass); esto nos sirve para comprobar que funciona el filtro*/

const valoresLista = document.getElementById("lista-desplegable-filtrar");
//los valores son los tipos de pokemon y se toman de la lista desplegable de html

valoresLista.addEventListener("change", () => {
  //cuando se hace un cambio en la lista-desplegable-filtrar se ejecuta la función flecha
  const valorSeleccionado = valoresLista.value; // se obtiene el valor seleccionado .value

  if (valorSeleccionado == "show-all") {
    // si se selecciona el valor de show-all se ejecuta el metodo de forEach para mostrar todas las tarjetas con todos los pokemones
    contenedorPokemones.innerHTML = "";
    pokemones.forEach((pokemon) => {
      const card = tarjetaPokemon(pokemon);
      contenedorPokemones.appendChild(card);
    });
  } else {
    // Si no se selecciona el valor de show-all, entonces se filtran los pokemones por el valor seleccionado
    const pokemonesFiltrados = filtroPokemones(data, valorSeleccionado);
    contenedorPokemones.innerHTML = ""; //se debe dejar el contenedor vacio siempre para que no se sobre escriban los datos de las nuevas funciones
    pokemonesFiltrados.forEach((pokemon) => {
      //la función forEach se ejecuta para mostrar las tarjetas
      const card = tarjetaPokemon(pokemon);
      contenedorPokemones.appendChild(card);
    });
  }
});









//Historia de usuario 3

//cómo hago para conectar la función con el evento del DOM ?
const ordenarValores = document.getElementById("lista-desplegable-ordenar");
ordenarValores.addEventListener("change", () => {
  const valoresOrdenados = ordenarValores.value; //obteniendo el valor seleccionado .value

  if (valoresOrdenados === "lower-catch-rate") {
    contenedorPokemones.innerHTML = "";
    pokemones.forEach((pokemon) => {
      const card = tarjetaPokemon(pokemon);
      contenedorPokemones.appendChild(card);
    });
  }
  else if (valoresOrdenados === "higher-catch-rate") {
    contenedorPokemones.innerHTML = "";
    pokemones.forEach((pokemon) => {
      const card = tarjetaPokemon(pokemon);
      contenedorPokemones.appendChild(card);
    });
  }
});


//ordenarPokemones => nombre de la función




//BOTON ORDENAR A-Z(clonar movies para usar esa constant y ordenarla)
const newMovies = data.films
const typeOrder= document.getElementById("typeOrder");
typeOrder.addEventListener("change", () => {
  const selectOrder= typeOrder.value;
  const ordenarPeliculas= orderAz(newMovies,selectOrder)
  console.log(selectOrder);
  console.log(ordenarPeliculas);
  contenedor.innerHTML="",
  ordenarPeliculas.forEach((order)=>{
    contenedor.innerHTML +=`<section> <br><img src="${order.poster} ">  <br>${order.rt_score} ⭐ <br>  ${order.title} </section>`
  })
});




export const orderAz= (data, respuestaUsuario) => {
  const orderMovies= data.sort((a, b)=> {
    if (a.title>b.title){
      return 1;
    }if (a.title<b.title){
      return -1;
    } 
  });
  if (respuestaUsuario==="A-Z"){
    return orderMovies;
  }
  else if(respuestaUsuario==="Z-A"){
    return orderMovies.reverse();
  }};













































// Refrescar la página al hacer clic en la imagen del logo
logoPokemon.addEventListener("click", () => {
  //al hacer click en el logo que trajimos arriba con la id se recarga la página
  location.reload(); //-reload se usa para recargar la página
});


////////////////////
//TESTING
// function init (){
//export init;