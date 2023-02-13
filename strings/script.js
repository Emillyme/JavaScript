
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("///////////////////////////////////////////");

console.log("Concatenação e Interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

console.log("///////////////////////////////////////////");

console.log("Conversão entre number e string");
const str1 = num.toString(); //"()" é para chamar a função
console.log(`Tipo de ${str1} é: ${typeof str1}`);

const str2 = num.toFixed(2); //(2) vai ter 2 casas decimasis {de 14.5 vai para 14.50}
console.log(`Tipo de ${str2} é: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} é: ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2} é: ${typeof num2}`);

const num3 = parseInt("21", 16);//16 = base hexadecimal
console.log(`Tipo de ${num3} é: ${typeof num3}`);

const num4 = parseFloat("21.34", 10)//parseFloat para numeros quebrados!!
console.log(`Tipo de ${num4} é: ${typeof num4}`);

console.log("///////////////////////////////////////////");

console.log("Characteres Propriedas e métodos");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

console.log(`toLowerCase: ${str.toLowerCase()}`); //tudo em minusculo
console.log(`toUpperCase: ${str.toUpperCase()}`); //tudo em maiusculo

console.log(`charAt: ${str.charAt(3)}`);//(3) posição do caracter 3 (marIa Silva), sendo começando por 0 1 2 3
console.log(`charAt: ${str[3]}`); // outra maneira de charAt

console.log(`replace: ${str.replace("i", "$")}`);//trocar o primeiro caractere i
console.log(`replace: ${str.replace(/i/g, "$")}`);//trocar todos os caracteres i

console.log(`length: ${str.length}`); //fala o numero de caracteres
console.log(`indexOf: ${str.indexOf("i")}`); // fala que posição esta
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`); // fala a posição do ultimo i

console.log(`substring: ${str.substring(3, 8)}`); //(3, 8) onde iniciar e apagar o nome 

//exemplos de substring
const data = "14/10/2021";
const mes = Number(data.substring(3, 5));
console.log(mes);
//////

console.log(`trim: ${str.trim()}`); // tira os espaços em branco