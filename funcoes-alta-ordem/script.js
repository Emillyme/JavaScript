const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];

// ------------------------------------------------------------
/// map: aplica uma função a cada elemento da coleção original, 
// retornando uma nova coleção com os elementos alterados

function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

const m1 = list1.map(dobro);//chamando a função map e passando como argumento a função dobro.
// NÃO esta chamando a função dobro esta apenas passando a referencia para a função dobro, que é só o nome dela.
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);

console.log("--------- MAP --------")
console.log(m1);//cada valor deu o dobro do array original (list1)
console.log(m2);
console.log(m3);



// ------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas 
// aqueles elementos da coleção original que 
// satisfazem um dado predicado

function par(x) { 
    return x % 2 == 0;
}

console.log(par(9)); //retorna true para numeros pares apenas 

const f1 = list1.filter(par);//retorna a list array filtrada apenas com numeros pares (par)
const f2 = list1.filter(x => x % 2 == 0);//mesma coisa que o (par) porem como função lambida
const f3 = list1.filter(x => x > 2);

console.log("--------- FILTER --------");
console.log(f1);
console.log(f2);
console.log(f3);



// -------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de 
// uma coleção, retornando o resultado final cumulativo.
// * você pode informar, opcionalmente, um valor inicial como 
// parâmetro (necessário para coleção vazia).

function soma(x, y){
    return x + y;
}

function produto(x, y){
    return x * y;
}

const r1 = list1.reduce(soma);//pega todos os elementos da função
const r2 = list2.reduce(soma, 0);//lista vazio. vai dar erro, porém para não dar erro temos que adicionar o 0 no const r2 (soma, 0)
const r3 = list1.reduce(produto, 1);//multiplicação de todos os produtos. (1) é o numero neutro, pq se fosse 0 qualquer numero multiplicado por zero é zero.


console.log("--------- REDUCE --------")
console.log(r1); //soma de todos os itens da lista 10
console.log(r2);
console.log(r3);



// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação 
// informada como parâmetro
// ATENÇAÕ: sort altera o vetor, não cria um novo!

function compararPorTamanho(s1, s2){
    return s1.length - s2.length;
}

console.log("--------- SORT --------")

const s1 = [...nomes].sort();//sort sem argumentos algum fica em ordem alfabética
console.log(s1);

const s2 = [...nomes].sort(compararPorTamanho);
console.log(s2);

const s3 = [...nomes].sort((x, y) => x.length - y.length);//calculo lambido
console.log(s3);

//[...nomes] = CRIA UMA CÓPIA DO VETOR PARA NÃO ALTERAR O VETOR ORIGINAL
