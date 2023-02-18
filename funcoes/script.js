//FORMAS DE DECLARAR FUNCTION NO JAVASCRIPT:

function soma1(num1, num2){
    return num1 + num2;
}

//função referenciada pela soma2
const soma2 = function(num1, num2){
    return num1 + num2;
}

//declarando função com "=>"
const soma3 = (num1, num2) => {
    return num1 + num2;
}

//declarando função com "=>" e retorno juntos
const soma4 = (num1, num2) => num1 + num2;

////

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2;


//função que não tem um retorno definido, por padrão ela retorna undefined:
function mostrarPreço(preco){
    console.log("PRECO = " + preco)
}


//Variaveis definidas dentro do escopo da função não vazam escopo para fora
function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
}

//Function hoisting: funções no JS são "movidas" para cima pelo motor do JS
function teste(x){
    console.log("TESTE = " + x);
}

teste(10);

//Funçoes podem ser passadas como argumento 
function triplo(num) {
    return num * 3;
}

function aplicar(f, num){
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);
