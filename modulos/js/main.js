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


//OBS: MODULOS SÃO STRICT MODE por padrão.
//Dentro do modulo, THIS é UNDEFINED e não uma referencia para window.
//Membros criados "soltos" não pertecem a window.