import { ordenarPokemones } from "../src/data.js";
//import data from "./../src/data/pokemon/pokemon.js"

//-------------------------Test función ordenar-------------------------
const dataPokemon = [ 
  {
    "name": "bulbasaur",
    "encounter": {
      "base-capture-rate": "0.2"
    }
  },
  {
    "name": "charmeleon",
    "encounter": {
      "base-capture-rate": "0.1"
    }
  },
  {
    "name": "blastoise",
    "encounter": {
      "base-capture-rate": "0.05"
    }
  },
  {
    "name": "pichu",
    "encounter": {
      "base-capture-rate": "not in capture"
    }
  },
]

const asc = [
  { "name": "pichu", "encounter": { "base-capture-rate": "not in capture" } },
  { "name": "bulbasaur", "encounter": { "base-capture-rate": "0.2" } },
  { "name": "charmeleon", "encounter": { "base-capture-rate": "0.1" } },
  { "name": "blastoise", "encounter": { "base-capture-rate": "0.05" } },
]

const desc = [
  { "name": "blastoise", "encounter": { "base-capture-rate": "0.05" } },
  { "name": "charmeleon", "encounter": { "base-capture-rate": "0.1" } },
  { "name": "bulbasaur", "encounter": { "base-capture-rate": "0.2" } },
  { "name": "pichu", "encounter": { "base-capture-rate": "not in capture" } },
]

describe("ordenarPokemones", () => { //nombre de la función
  it("debería ser una función", () => { //descripción de la función
    expect(typeof ordenarPokemones).toBe("function");
  });

  it("debería devolver los pokemones ordenados ascendentemente", () => {
    expect(ordenarPokemones(dataPokemon, "from-lower-to-higher")).toEqual(asc);
  });

  it("debería devolver los pokemones ordenados descendentemente", () => {
    expect(ordenarPokemones(dataPokemon, "from-higher-to-lower")).toEqual(desc);
  });
});