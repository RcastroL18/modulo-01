console.clear();

console.log("Ola mundo!!");


const prompt = require("prompt-sync")();


// let aluno =  "Felipe" ;
// let nome = aluno ;
/*
let cliente = prompt("Digite seu nome")
let preco = +prompt("Qual o valor por quilo?" );
let quantidade = +prompt("Quantos quilos está comprando?");

let total = preco * quantidade ; 

console.log(`${cliente}, O valor total é:, ${total}`) ;
// console.log(total);
*/

// let tempo = prompt('Como está o tempo? ')
// let dinheiro = prompt('Quanto dinheiro Maycon tem?');

/* if (tempo == "Sol") {
    console.log('Maycon vai levar seus filhos a praia');
  
} 
else if(tempo == 'chuva') {
    console.log("Maycon vai jogar purrinha")
}
else if (tempo == "neve") {
    console.log("Maycon vai esquiar em Bariloche")
}
else {
    console.log("Maycon vai ficar jogando video game");
}

// if (dinheiro > 20) {
//    console.log("Maycon levará seus filhos para tomar sorteve")
//}
*/

/* let numero = prompt('Digite um número ');

if (numero > 50) {
    console.log('Número maior que 50');
}
else if (numero > 30) {
    console.log('Número maior que 30');
}
else if ( numero > 10) {
    console.log('Número maior que 10');

} else {
    console.log("Vamos continuar digitando");
}

*/

// Exercicio 1

/*
console.log() ;
let funcionario = prompt("Digite seu nome ");
let salario = +prompt("Digite o seu salário ");
const reajuste1 = 0.2;
const reajuste2 = 0.15;
const reajuste3 = 0.1;
const reajuste4 = 0.05;

let total ; 
let novoSalario ;

if ( salario <= 280) {
    total = salario * reajuste1
    novoSalario = total + salario
    console.log(`${funcionario}, seu novo salário é ${novoSalario}, você ganhou um aumento de ${total}`)
} 
else if (salario <= 780) {
    total = salario * reajuste2
    novoSalario = total + salario
    console.log(`${funcionario}, seu novo salário é ${novoSalario}, você ganhou um aumento de ${total}`)
}
else if (salario <= 1500) {
    total = salario * reajuste3
    novoSalario = total + salario
    console.log(`${funcionario}, seu novo salário é ${novoSalario}, você ganhou um aumento de ${total}`)
} else {
    total = salario * reajuste4
    novoSalario = total + salario
    console.log(`${funcionario}, seu novo salário é ${novoSalario}, você ganhou um aumento de ${total}`)

}
*/

 // 2 Exercicio aula 4 

console.log("Advinhe o número que o computador está gerando");

/*let numero = +prompt("Tente advinhar o numero ");
let baidu = resultadoDaFuncao
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}


if (numero == getRandom) {
    console.log(`Parabens, você advinhou o numero ${numero}`)
}
else {
    console.log("Você errou o número");
    console.log(`Você errou, o número que você digitou foi ${numero} o número gerado foi${baidu}`);
}


/* console.log("Bem vindo ao caixa eletrônico");
console.log();
let saque = +prompt("Digite o valor de saque desejado ");
// let notas = +prompt('Digite a quantidade de notas desejada ');

If ( saque < 10 ) { 
    console.log("Valor de saque indisponível");
} else if ( saque > 600 ) {
    console.log("Valor muito alto");
}