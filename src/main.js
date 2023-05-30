import { filtroPokemones, tarjetaPokemon, ordenarPokemones } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaramos variables que vamos a usar
const pokemones = data.pokemon;
const contenedorPokemones = document.getElementById("contenedor_pokemones");
const logoPokemon = document.getElementById("imagenLogoPokemon");

// Refrescar la página al hacer clic en la imagen del logo
logoPokemon.addEventListener("click", () => {
  //al hacer click en el logo que trajimos arriba con la id se recarga la página
  location.reload(); //-reload se usa para recargar la página
});

// --------------------------- HISTORIA DE USUARIO 1 : Creación de la función de la tarjeta de pokemones para reusarla después
const tarjetaPokemon = (pokemon) => {
  //se extraen las propiedades del objeto pokemon con la función flecha
  const img = pokemon.img;
  const name = pokemon.name;
  const height = pokemon.size.height;
  const weight = pokemon.size.weight;
  const type = pokemon.type.join(", "); // .join sirve para poner elementos entre los elementos del array
  const baseCaptureRate = pokemon.encounter["base-capture-rate"]; // también se puede acceder a una propiedad específica dentro del objeto mediante los []. La notación de corchetes es útil cuando el nombre de la propiedad es dinámico o cuando contiene caracteres especiales, como espacios o guiones.

  const card = document.createElement("div"); //.createElement sirve para crear un div que contiene la tarjeta del pokémon.
  card.className = "pokemon-card"; //Se asigna la clase "pokemon-card" al elemento de la tarjeta para modificar en CSS
  card.innerHTML = ` 
    <img src="${img}" alt="${name}">
    <h3>${name}</h3> 
    <div class="cardp">
        <p>Height: ${height}</p>
        <p>Weight: ${weight}</p>
        <p>Base Capture Rate: ${baseCaptureRate}</p>
        <p class= "type">Type: ${type}</p>
    </div>
  `;
  //Establecemos el contenido de la tarjeta con .innerHTML
  //los ${template string} permiten que se inserte el valor original dela propiedad
  return card; //Aquí retornamos el elemento de la tarjeta creado
};

// Visualización de los pokemones con el método .forEach
pokemones.forEach((pokemon) => {
  //se usa el metodo forEach para ir por cada pokemon y ejecutar la función que los muestra
  const card = tarjetaPokemon(pokemon);
  contenedorPokemones.appendChild(card);
  //appendChild se usa para mostrar la tarjeta en el html (contenedor_pokemones)
  //el forEach hace que el proceso de crear una tarjeta se repita con cada pokemon
  //la tarjeta creada la traemos de data.js
});

// --------------------------- HISTORIA DE USUARIO 2: Filtro de pokemones
/*const pokemonesGrass = filtroPokemones(data, "grass"); console.log(pokemonesGrass); esto nos sirve para comprobar que funciona el filtro*/

const valoresLista = document.getElementById("lista-desplegable-filtrar");
//los valores son los tipos de pokemon y se toman de la lista desplegable de html

valoresLista.addEventListener("change", () => {
  //cuando se hace un cambio en la lista-desplegable-filtrar se ejecuta la función flecha
  const valorSeleccionado = valoresLista.value; // se obtiene el valor seleccionado .value

  if (valorSeleccionado === "show-all") {
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

//----------------------------------- HISTORIA DE USUARIO 3: Filtro de ordenamiento

const ordenarValores = document.getElementById("lista-desplegable-ordenar");
ordenarValores.addEventListener("change", () => {
  const valoresOrdenados = ordenarValores.value; //obteniendo el valor seleccionado .value
  ordenarPokemones(pokemones, valoresOrdenados); //llamando la función ordenarPokemones, pasando como argumento pokemones (donde está la data) y donde se guardó el valor seleccionado

  if (valoresOrdenados === "from-lower-to-higher" || valoresOrdenados === "from-higher-to-lower") {
    contenedorPokemones.innerHTML = "";
    data.pokemon.forEach((pokemon) => { //recorriendo el arreglo original data.pokemon 
      const card = tarjetaPokemon(pokemon);
      contenedorPokemones.appendChild(card);
    });
  }
});



