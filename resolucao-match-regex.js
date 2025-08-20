// Conte quantas vezes a letra "a" aparece em "Aprendendo JavaScript agora".
let frase = "Aprendendo Javascript agora";

let matches = frase.match(/a/gi);

let quantidade = matches ? matches.length : 0;

console.log(quantidade);