// Conte quantas vezes a letra "a" aparece em "Aprendendo JavaScript agora".
let frase = "Aprendendo Javascript agora";

let quantidade = frase
    .split("")
    .filter(el => el.toLowerCase() === "a")
    .length;

console.log(quantidade);