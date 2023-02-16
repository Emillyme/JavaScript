// TAMANHO DO ARRAY

const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length; // fala quantos elevemtos tem o vetor/array

console.log("--> Teste lenght")
console.log(t1)


// REMOVER ELEMENTOS

const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop();// Pop remove o Marcos do Array e guarda na variavel r1
const r2 = nomes.shift();// shift remove o primeiro nome Maria

console.log("--> Teste pop");
console.log(r1);
console.log(r2);
console.log(nomes);


// INSERIR ELEMENTOS

const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);//inseri no final
alturas.unshift(1.58);//inseri no começo

console.log("--> Teste push e unshift");
console.log(alturas);


// INSERIR E REMOVER GERAL

//               0    1    2*   3*   4*   5
const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 3, "X"); // tres elementos apartir do B(2) foram deletados 
//splice pode também substituir os itens deletados por outro
console.log("--> Teste splice");
console.log(letras);


// CONCATENAS ARRAYS (CONCATENAR = JUNTAR) ou seja JUNTAS ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);//concat(array) junta os dois
console.log("--> Teste Concat");
console.log(todos);


// ACESSO E ATRIBUIÇÃO

const idades = [20, 30, 40, 50];

idades[1] = 38; // substituiu o 30 por 38
console.log("--> Teste acesso e atribuição");
console.log(idades);


// PERCORRER ARRAY

const frutas = ["Banana", "Laranja", "Uva"];

console.log("--> Teste percorrer array");
for(let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}


// PERCORRER ARRAY COM FOR EACH (para cada elemento do meu vetor querer executar umac coisa)

console.log("--> Teste percorrer com forEach");
frutas.forEach(item => {
    console.log(item);
})
