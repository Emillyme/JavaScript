//assim que se importa uma biblioteca :)
import * as nb from './numbers.js'
// * = exporta todas as funções da biblioteca
//nb = numbers

//podemos tbm importar funções expecificas:
// import { sum, round } from './numbers.js';

import Product from './product.js';

const obj = new Product("Computador", 900.0, 20);

console.log(nb.sum(3,4));
console.log(nb.exp(3,4));
console.log(obj);
