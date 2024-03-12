const fib = (numero, a = 0, b = 1) => {
    if (a === numero || b === numero) return "Pertence";
    else if (b > numero) return "Não pertence";
    return fib(numero, b, a + b);
}

console.log(fib(8));
console.log(fib(10));
console.log(fib(13));
console.log(fib(21));
console.log(fib(12));
console.log(fib(34));
console.log(fib(55));
console.log(fib(9));
