function dizerOla(){
    console.log("ola");
}

// O setTimeout é para dar um tempo em funções até ela ser executada

//setTimeout(dizerOla, 2000); // demora 2 segundos pra se dizer ola

function dizerBomdia(nome){
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomdia("Maria");
    setTimeout(() => {
        dizerBomdia("Jão");
        setTimeout(() => {
            dizerBomdia("Aninha");
        }, 2000);
    }, 2000);
}, 2000);

console.log("A");
console.log("B");

