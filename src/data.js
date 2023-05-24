import data from "./data/pokemon/pokemon.js"; //por qué dice que está declarada pero nunca usuada

// Historia de usuario 1 : Creación de la función de la tarjeta de pokemones para reusarla después
export const tarjetaPokemon = (pokemon) => {
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

// Historia de usuario 2: Creación de la función del filtro
export const filtroPokemones = (data, propiedad) => {
    //La función toma dos argumentos: "data", que representa un objeto de datos que contiene información sobre los pokémones, y "propiedad", que es el tipo de pokémon que se desea filtrar
    let result = data.pokemon.filter((pokemon) => {
        //se crea una variable que se llama resultado para poner los pokemones filtrados en un nuevo arreglo.
        // con el metodo se entra a la data, al objeto pokemon y luego se filtran los pokemones
        console.log(pokemon.type);
        return pokemon.type.includes(propiedad); //el .includes nos sirve para determinar si el objeto filtrado contiene la propiedad especificada y devuelve un true si la contiene
        //este return nos sirve para determinar si el pokemon filtrado corresponde al tipo/valor que seleccionamos. Si retorna true, continua al siguiente return y se suman al arreglo nuevo de la variable resultado
    });
    console.log(result);
    return result; // se retorna el array result que contiene los pokémones filtrados
};


//Historia de usuario 3 - opción 1
export const ordenarPokemones = (data, sortBy) => { //creando la función para el método sort
    const ordenarBaseCaptureRate = data.sort((a, b) => {
        if (a.encounter["base-capture-rate"] > b.encounter["base-capture-rate"]) {
            return 1;
        } if (a.encounter["base-capture-rate"] < b.encounter["base-capture-rate"]) {
            return -1;
        }
    });
    if (sortBy === "0.2-not in capture") {
        return ordenarBaseCaptureRate;
    } else {
        return ordenarBaseCaptureRate.reverse();
    }
}


    //Historia de usuario 3 - opción 2
    export const ordenarPokemones = (data, sortBy, sortOrder) => { //creando la función para el método sort, la función espera 3 parametros
        ordenarPokemones.data.pokemon.sort(function (a, b) { //emplear el método, emplear el parametro data
            const highestBaseRate = a.encounter["base-capture-rate"](); // sort by (aunque no usado), indicando cuál campo de la data se quiere ordenar
            const lowestBaseRate = b.encounter["base-capture-rate"]();
            if (highestBaseRate > lowestBaseRate) { //sort order (aunque no usado), indicando el orden ascendente o descendente.
                return 1;
            } else {
                return -1;
            }
        });
        return a - b;
    },


//PASOS
//* sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
//1. El primer parámetro, data, nos entrega los datos. 
//2. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
//3. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

//1. data
//2. sortBy
//3. sortOrder



//const baseCaptureRate = [0.2, 0.1, 0.05, 0.5, 0.25, 0.125, 0.3, 0.6, 0.15, 0.4, 0.7, 0.03, 0.06, 100, 0.02, 'not in capture'];
//baseCaptureRate.sort();
//console.log(baseCaptureRate);

//if (0.02 < 'not in capture') {
//return -1;
//}
//if (0.02 > 'not in capture') {
//return 1;
//}
//})

//return a - b; -> para indicar que debe ordenar numbers


