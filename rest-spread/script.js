// REST: valores passados com virgula => array
//rest = ...
//obs: NaN = Not a Number

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(1, 2, 3, 4);

console.log(result1);

const result2 = Math.max(2, 5, 9, 3); // imprime o maximo dos valores (mais alto)
console.log(result2);


// SPREAD: array => valores separados por virgula

const myNumbers = [2, 3, 10, 5];
//const result3 = Math.max(myNumbers); // Nao funciona
const result3 = Math.max(...myNumbers); // os ... serviram parar separar os valores separados em virgula
console.log(result3);


// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item } //espalhas os items em virgula e clona eles
const cloneItemPlus = { ...item, weigth: 10 }; //acrescentando mais coisas no obj com ...item
