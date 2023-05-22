import data from "./data/pokemon/pokemon.js";


















//puedo trabajar a partir de la línea 64
// Historia de usuario 3
export const getBaseCaptureRateInOrder = (data, pokemon) => { //acá va la data de pokemon.js, pero qué más? 
    getBaseCaptureRateInOrder.sort(function (a, b) {
        const highestBaseRate = a.base-capture-rate();
        const lowestBaseRate = b.base-capture-rate();
        if (highestBaseRate > lowestBaseRate) {
            return 1;
        } else {
            return -1;
        }
    });
    return a - b;
},


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