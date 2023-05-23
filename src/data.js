


































































import data from "./data/pokemon/pokemon.js";
//Historia de usuario 1
export 

pokemones.forEach((pokemon) => {
    const img = pokemon.img;
    const name = pokemon.name;
    const height = pokemon.size["height"];
    const weight = pokemon.size["weight"];
    const type = pokemon.type.join(", "); //.join funciona para poner elementos entre dos elementos del array
    const baseCaptureRate = pokemon.encounter["base-capture-rate"];

    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}">
      <h3>${name}</h3> 
      <div class="cardp">
          <p>Height: ${height}</p>
          <p>Weight: ${weight}</p>
          <p>Base Capture Rate: ${baseCaptureRate}</p>
          <p>Type: ${type}</p>
      </div>
  `;
    contenedorPokemones.appendChild(card);
});





//Historia de usuario 2
export const filtroPokemones = (data, propiedad) => {
    let result = data.pokemon.filter((pokemon) => {
        console.log(pokemon.type)
        return pokemon.type.includes(propiedad) == true;
    });
    console.log(result)
    return result
};

//Historia de usuario 3
export const ordenarBaseCaptureRate = (data, propiedad, order) => { //por qué la propiedad se escribe "propiedad"? // data
    ordenarBaseCaptureRate.data.pokemon.sort(function (a, b) { //a,b la función espera dos parametros 
        const highestBaseRate = a.encounter["base-capture-rate"](); // sort by
        const lowestBaseRate = b.encounter["base-capture-rate"]();
        if (highestBaseRate > lowestBaseRate) { //sort order
            return 1;
        } else {
            return -1;
        }
    });
    return a - b;
},


//1. pokemon.sort((i) => {i.base-capture-rate})
//ordenarBaseCaptureRate()


//pokemon.encounter.base-capture-rate

//////

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
