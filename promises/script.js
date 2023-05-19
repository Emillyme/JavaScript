// Promise é uma função construtora.

function f(g, h){
    setTimeout(() => {
    if (10 > 0){
        g("P");
    }
    else{
        h("Q");
    }
    }, 3000);
}
//maneira 1:
// function executarSeRejeitar(valor){
//     console.log("Rejeitada com o valor " + valor)
// }

const minhaPromise = new Promise(f);

//maneira 2:

minhaPromise
.then(valor => {
    console.log("Resolveu com o valor " + valor);
})
.catch(valor => {
    console.log("Rejeitada com o valor " + valor);
});

console.log(minhaPromise); // o estado do objeto muda por causa da logica que dps foi alterada pelo settimeout