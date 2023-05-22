import data from "./data/pokemon/pokemon.js";

export const filtroPokemones = (data, propiedad) => {
  let result = data.pokemon.filter((pokemon) => {
    console.log(pokemon.type)
   return pokemon.type.includes(propiedad) == true;
  });
  console.log(result)
  return result
};
























//Yo trabajo hasta aquí 
//Historia de usuario 3