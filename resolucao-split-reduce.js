// Conte quantas vezes a letra "a" aparece em "Aprendendo JavaScript agora".
let frase = "Aprendendo Javascript agora";

let arr = frase.split("");

let quantidade = arr.reduce((acc, char) =>{
    if(char.toLowerCase() === "a"){
        return acc + 1;
    }
    return acc;
},0);

console.log(quantidade);