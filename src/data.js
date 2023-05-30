// --------------------------- HISTORIA DE USUARIO 2: Creación de la función del filtro
export const filtroPokemones = (data, propiedad) => {
  //La función toma dos argumentos: "data", que representa un objeto de datos que contiene información sobre los pokémones, y "propiedad", que es el tipo de pokémon que se desea filtrar
  const result = data.pokemon.filter((pokemon) => {
    //se crea una variable que se llama resultado para poner los pokemones filtrados en un nuevo arreglo.
    // con el metodo se entra a la data, al objeto pokemon y luego se filtran los pokemones
    // console.log(pokemon.type);
    return pokemon.type.includes(propiedad); //el .includes nos sirve para determinar si el objeto filtrado contiene la propiedad especificada y devuelve un true si la contiene
    //este return nos sirve para determinar si el pokemon filtrado corresponde al tipo/valor que seleccionamos. Si retorna true, continua al siguiente return y se suman al arreglo nuevo de la variable resultado
  });
  // console.log(result);
  return result; // se retorna el array result que contiene los pokémones filtrados
};

//----------------------------------- HISTORIA DE USUARIO 3: Creación de la función de ordenamiento
export const ordenarPokemones = (dataPokemon, sortOrder) => { //dataPokemon y sortOrder son los parametros que debe recibir
  dataPokemon.sort(function (a, b) { //empleando método .sort y haciendo una comparación (a,b)
    const lowerCatchRate = a.encounter["base-capture-rate"]; //trayendo las propiedades que utilizaremos -> encounter: base-capture-rate
    //console.log('resultado 1', lowerCatchRate);
    const higherCatchRate = b.encounter["base-capture-rate"];
    //console.log('resultado 2', higherCatchRate); 
    if (sortOrder === "from-lower-to-higher") {
      if (lowerCatchRate > higherCatchRate) //filtro ascendente - si se selecciona de  menor a mayor probabilidad de captura
        return -1; //-1 indica los últimos índices del array
      if (lowerCatchRate < higherCatchRate)
        return 1; //1 indica los primeros índices del array
    } else if (sortOrder === "from-higher-to-lower") {
      if (lowerCatchRate < higherCatchRate) //filtro descendente - si se selecciona de mayor a menor probabilidad de captura
        return -1;
      if (lowerCatchRate > higherCatchRate)
        return 1;
    }
    return 0;
  });
  return dataPokemon; //se retorna el array ordenado
  //console.log(dataPokemon);
};
