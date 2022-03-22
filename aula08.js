console.clear();
console. log();

const prompt = require("prompt-sync")();

const nomes = ["Paulo", "Olavo", "Cleitin", "Perna Torta"];
/*
for (let i = 0; i < nomes.length; i++) {
console.log("i", i);

const nome = nomes[i];

console.log("nome", nome);
console.log();
}
 

for (const nome of nomes) {
    console.log("nomes", nomes)

}*/

let linhas = 4
let colunas = 3

for (let linhaAtual = 0; linhaAtual <= linhas; linhaAtual++) {
    const numeros = [];
    
    for(let numero = linhaAtual; numero < linhaAtual + 4; numero++) {
        numeros.push(numero);

}
console.log(numeros);
}