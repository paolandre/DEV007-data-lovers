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
export const ordenarPokemones = (dataPokemon, sortOrder) => { 
  //dataPokemon son los pokemones y sortOrder es el tipo de ordenamiento que se desea aplicar
  // sortOrder Representa la opción de ordenamiento seleccionada por el usuario.
  dataPokemon.sort(function (pokemonA, pokemonB) { 
    //Cuando se llama al método .sort() en un arreglo, se proporciona una función de comparación como argumento para determinar el orden de los elementos. 
    //Esta función de comparación toma dos elementos del arreglo y los compara entre sí.

    const lowerCatchRate = pokemonA.encounter["base-capture-rate"]; //trayendo las propiedades que utilizaremos -> encounter: base-capture-rate
    //probabilidad de captura más baja en comparación 
    const higherCatchRate = pokemonB.encounter["base-capture-rate"];
    //probabilidad de captura más alta en comparación 

    if (sortOrder === "from-lower-to-higher") {
      //si el valor seleccionado por el usuario es "from-lower-to-higher se ejecutan los siguientes 
      //condicionales para organizar los pokemones en comparación con cada uno en orden ascendente
      //de menor a mayor
      if (lowerCatchRate > higherCatchRate) //mayor que
        return -1;
      if (lowerCatchRate < higherCatchRate) //menor que
        return 1; 

    } else if (sortOrder === "from-higher-to-lower") {
      //si el valor seleccionado por el usuario es "from-higher-to-lower se ejecutan los siguientes 
      //condicionales para organizar los pokemones en comparación con cada uno en orden descendente
      //de mayor a menor
      if (lowerCatchRate < higherCatchRate) 
        return -1;
      if (lowerCatchRate > higherCatchRate)
        return 1;
    }
    return 0; //si no hay selección se retorna 0
  });
  return dataPokemon; //se retorna el array ordenado
  //console.log(dataPokemon);
};
