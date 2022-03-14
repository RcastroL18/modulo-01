
const prompt = require("prompt-sync")();
console.clear();

console.log("Olá meu caro amiguinho, preparado para uma incrível jornada pela história de sua vida, regada a muitas lágrimas e ilusão?");
console.log();
console.log("Caro pacato cidadão, em um belo ano dourado, você está terminando o seu ensino médio, não vê a hora de sair para o mundo");
console.log();
console.log("e ser um adulto bem sucedido e responsável, mas a vida, a vida é uma caixinha de supresas.");
console.log();
console.log("E te obriga a fazer algumas escolhas, isso já na escola.");
console.log();
console.log("Digite [sim] ou [nao] para as perguntas a baixo e determine sua jornada!");
console.log();

let pergunta1 = prompt("Durante todo o seu ensino médio você se preparou, empenhou-se nos estudos? ")

if (pergunta1 == "sim") {
    pergunta1 = 1;
}
else if (pergunta1 == "nao" ) {
    pergunta1 = 0;
}
else {
    console.log("Resposta inválida.");
}

let pergunta2 = prompt("Parabéns, você terminou o ensino médio. Agora você foi promovido de estudante para desempregado. Você vai prestar o vestibular? ");

if  (pergunta2 == "sim") {
    pergunta2 = 1;
}
else if (pergunta2 == "nao" ) {
    pergunta2 = 0;
}
else {
    console.log("Resposta inválida.");
}

let pergunta3 = prompt("Você já tem 24 anos já comprou sua casa e o carro? ")

if (pergunta3 == "sim") {
    pergunta3 = 1;
}
else if (pergunta3 == "nao" ) {
    pergunta3 = 0;
}
else {
    console.log("Resposta inválida.");
}

let pergunta4 = prompt("você ainda não tem filhos ou CPF sujo? ")


if (pergunta4 == "sim") {
    pergunta4 = 1;
}
else if (pergunta4 == "nao" ) {
    pergunta4 = 0;
}
else {
    console.log("Resposta inválida.");
}

let pergunta5 = prompt("Você é um adulto de 40 anos, você é feliz? ");


if (pergunta5 == "sim") {
    pergunta5 = 1;
}
else if (pergunta5 == "nao" ) {
    pergunta5 = 0;
}
else {
    console.log("Resposta inválida");
}

let soma = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5;

if (soma == 0) {
    console.log("\n Você é um adulto e falhou miseravelmente para a sociedade, mas contienue trabalhando a pessoa interior, alcool ameniza, mas não resolve. Mas pelo menos ameniza.")
}
else if (soma == 1 || soma == 2) {
    console.log("\ Sei lá, procure um emprego o mais rápido possível ou volte a estudar, Only Fans está em alta. Quem sabe... ");
}
else if (soma == 3) {
    console.log("\n Um futebol e uma cervejinha junto com uma pessoa bacana. Você é perfeitamente normal, se é que essa palavra existe.");
}
else if (soma == 4) {
    console.log("\nPrimeiro certifique-se que você não está em coma, sonhando. Não sendo esse o caso, você representa 1% da sociedade. Parabéns!!" );
}
else {
    console.log("\nVocê é nota 10. Procure urgentemente um ufologista ou um psicologo. Você não é desse planeta ou tem uma patologia psiquiatrica grave.")
}
