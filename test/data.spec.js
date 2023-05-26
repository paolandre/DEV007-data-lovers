import { ordenarPokemones } from "../src/data.js";
import data from "./../src/data/pokemon/pokemon.js"

//copia de un pedacito de la data real
// const dataPokemon = [ // data para hacer las pruebas, tienen diferentes valores para "type" y "base-capture-rate"
//   {
//     "num": "001",
//     "name": "bulbasaur",
//     "type": [
//       "grass",
//       "poison"
//     ],
//     "encounter": {
//       "base-flee-rate": "0.1",
//       "base-capture-rate": "0.2"
//     },
//   },
//   {
//     "num": "005",
//     "name": "charmeleon",
//     "type": [
//       "fire"
//     ],
//     "encounter": {
//       "base-flee-rate": "0.07",
//       "base-capture-rate": "0.1"
//     },
//   },
//   {
//     "num": "009",
//     "name": "blastoise",
//     "type": [
//       "water"
//     ],
//     "encounter": {
//       "base-flee-rate": "0.05",
//       "base-capture-rate": "0.05"
//     },
//   },
//   {
//     "num": "172",
//     "name": "pichu",
//     "type": [
//       "electric"
//     ],
//     "encounter": {
//       "base-flee-rate": "not in capture",
//       "base-capture-rate": "not in capture"
//     },
//   },
// ]

describe("ordenarPokemones", () => { //nombre de la función
  it("debería ser una función", () => { //descripción del test
    expect(typeof ordenarPokemones).toBe("function");
  });
  // it("ordena los pokemones de menor a mayor y de mayor a menor probabilidad de captura", () => {
  //   expect(ordenarPokemones(dataPokemon)).toStrictEqual([{}]); //dentro ([{}]) debería estar el array
  // });
  it("ordena los pokemones de menor a mayor y de mayor a menor probabilidad de captura", () => {
    expect(ordenarPokemones(data)).toStrictEqual([{}]); //dentro ([{}]) debería estar el array
  });
});




//dataPokemon pasa un array con el ordenamiento ?


//---------------------------ejemplos---------------------------------
// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });