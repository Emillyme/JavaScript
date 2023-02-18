const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

//tanto faz obj1 ou obj2, os dois dão o mesmo resultado

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15" // se tiver com caractere especial precisa colcoar aspas.
}

/*COMO INDENTIFICAR ARRAY E OBJETO:

Geralmente em objetos, usamos {} (chaves)
e para array usamos [] (colchetes)

*/

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.date);//navegando entre os arrays e objetos
console.log(obj3.client);
console.log(obj3.client.name);



const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;//atualmente em texto string

const obj = JSON.parse(txt);// JSON.parse() converte para arquivo JSON (txt para json)

console.log(obj); //em json
console.log(txt.name)
console.log(obj.nome);

//Como pegar um objeto javascript e converter para texto
const text = JSON.stringify(obj);

console.log(text);///em texto