// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';
export const filtroPokemones = (data, propiedad) => {
  return data.filter(pokemon => {
    return pokemon.type === propiedad
  })
}

console.log(filtroPokemones(pokemones, 'grass'))

export const anotherExample = () => {
  return 'OMG';
};

const pokemones = data.pokemon;

//creando el filtro por cada tipo de poder.
// debemos crear en el HTML una lista para que se vean los tipos de poder
export const grass = pokemones.filter(pokemon => {
return pokemon.type === 'grass'
})

export const poison = pokemones.filter(pokemon => {
return pokemon.type === 'poison'
})





//funciones data.js -> creando funnciones que se encargan de manipular la data

//function filtrar(data, propiedad) {
//return data.filter(pokemon => {
//return pokemon.type === propiedad
// })
//}
//console.log(filtrar(pokemones, 'type'))

//pokemon.type === propiedad - va a pasar por cada type