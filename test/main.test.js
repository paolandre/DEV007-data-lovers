import { ordenarPokemones } from "./data.js";

describe("ordenarPokemones", () => {
  it("debería ser una función", () => {
    expect(typeof ordenarPokemones).toBe("function");
  });
});

//it("ordena los pokemones de menor a mayor y de mayor a menor probabilidad de captura", () => {
//expect(ordenarPokemones(data.pokemon)).toHaveProperty("base-capture-rate", 0.2);
//});
//});








//0.2, 0.1, 0.05, 0.5, 0.25, 0.125, 0.3, 0.6, 0.15, 0.4, 0.7, 0.03, 0.06, 100, 0.02, 'not in capture'

//  describe(('pruebas del archivo main') => {
//     it(('se valida que se pinten los pokemons ')=>{
//         document.body.innerHTML = `<div id="contenedor_pokemones"></div>`

//         main.init()

//         const contenedor = document.getElementById('contenedor_pokemones')

//         expect(contenedor.child.length).toBe(251)

//     })

// })
