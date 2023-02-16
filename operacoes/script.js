console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);//soma
console.log(`3 - 4 = ${3 - 4}`);//subtração
console.log(`3 * 4 = ${3 * 4}`);//multiplicação
console.log(`19 / 3 = ${19 / 5}`);//divisõa
console.log(`19 % 3 = ${19 % 5}`);//mod (resto da divisão)
console.log(`3 ** 4 = ${3 ** 4}`);//elevado a portenciação

console.log("----------------------------");

console.log("Operadores comparativos");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);

console.log("----------------------------");
/*Converte para um tipo em comum, depois compara:
== 
!=

Compara levando em conta também o tipo:
=== 
!== 

object: compara referência
string, number, boolean: compara valor */

console.log("Operadores comparativos de igualdade");
console.log(`"" == false: ${"" == false}`);//compara apenas
console.log(`"" === false: ${"" === false}`);//tres iguais (=) compara até o tipo
console.log(`"17" == 17: ${"17" == 17}`);//compara apenas
console.log(`"17" === 17: ${"17" === 17}`);//tres iguais (=) compara até o tipo

console.log("----------------------------");

console.log("Operadores comparativos de igualdade");
const x = "Maria";
const y = "Maria";
const a = new String("Maria");
const b = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria")`);

console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

console.log("----------------------------");
/*
&& (E)
|| (OU)
! (NÃO) tudo que é verdadeiro fica falso e vice-versa
*/

console.log("Operadores lógicos");
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)}`);
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);