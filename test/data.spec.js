import { tarjetaPokemon, filtroPokemones } from "../src/data.js";
//import data from "./data/pokemon/pokemon.js";

//Test de la tarjeta de Pokemon
describe("tarjetaPokemon", () => {
  it("Debería ser una función", () => {
    expect(typeof tarjetaPokemon).toBe("function");
  });
});

//Test del filtro de pokemones
//Data ficticia simulando la data real
const data = {
  pokemon: [
    { name: "bulbasaur", type: "grass" },
    { name: "squirtle", type: "water" },
    { name: "charmander", type: "fire" },
    { name: "pikachu", type: "electric" },
  ],
};

//Resultados esperados
const pokemonGrass = [{ name: "bulbasaur", type: "grass" }];
const pokemonWater = [{ name: "squirtle", type: "water" }];
const pokemonFire = [{ name: "charmander", type: "fire" }];
const pokemonElectric = [{ name: "pikachu", type: "electric" }];

describe("filtroPokemones", () => {
  it("Debería retornar el tipo grass", () => {});
  expect(filtroPokemones(data, "grass")).toEqual(pokemonGrass);

  it("Debería retornar el tipo water", () => {});
  expect(filtroPokemones(data, "water")).toEqual(pokemonWater);

  it("Debería retornar el tipo fire", () => {});
  expect(filtroPokemones(data, "fire")).toEqual(pokemonFire);

  it("Debería retornar los pokémones del tipo electric", () => {
    expect(filtroPokemones(data, "electric")).toEqual(pokemonElectric);
  });
});

//Test de la función
describe("filtroPokemones", () => {
  it("Debería ser una función", () => {
    expect(typeof filtroPokemones).toBe("function");
  });
});

//Test de que es un array
describe("filtroPokemones", () => {
  it("Debería retornar un array de pokémones", () => {
    const result = filtroPokemones(data, "grass");
    expect(Array.isArray(result)).toBe(true);
  });
});

//Test para ver si contiene la información que se pide
it("Debería incluir a Pikachu en el resultado al filtrar por tipo electric", () => {
  const resultado = filtroPokemones(data, "electric");
  expect(resultado).toContainEqual({ name: "pikachu", type: "electric" });
});
