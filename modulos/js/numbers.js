//precisamos colocar Export na frente da function para exportarmos as funções.

export function sum(num1, num2){ //sum = soma
    return num1 + num2;
}

export function exp(base, exponent){ //exponenciação = exp
    return base ** exponent
}

export function round(value, precision){ //arredondar
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//outra forma de exportar:
// export{ sum, round };