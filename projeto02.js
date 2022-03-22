console.log();
console.clear();
const prompt = require("prompt-sync")();
console.log(  "Bem vindo ao jogo Pedra, Papel e Tesoura, está pronto para começar? ");

function jogo () {

const lista = ["Pedra", "Papel", "Tesoura"];
let rodadas;
let winPc = 0;
let escolhaUsuario;
let winU = 0;
let empate = 0;
let restart ;
do {
  rodadas = +prompt("Quantas rodadas você deseja jogar? ");
} while ((isNaN(rodadas) || rodadas < 1) && rodadas > 0);

for (i = 0; i < rodadas; i++) {
  escolhaUsuario = +prompt(
    "Faça a sua escolha. 1- Pedra, 2- Papel ou 3- Tesoura: "
  );

  if (escolhaUsuario >= 1 && escolhaUsuario <= 3) {
    let escolhaDoPc = Math.floor(Math.random() * 3 + 1);

    if (
      (escolhaUsuario === 1 && escolhaDoPc === 3) ||
      (escolhaUsuario === 2 && escolhaDoPc === 1) ||
      (escolhaUsuario === 3 && escolhaDoPc === 2)
    ) {
      console.log(
        `Você escolheu ${
          lista[escolhaUsuario - 1]
        }, e o seu adversário escolheu ${lista[escolhaDoPc - 1]} `);
        console.log("################# Você ganhou a roda!! ####################################");
      winU++;

    } 
    else if (
      (escolhaUsuario === 1 && escolhaDoPc === 1) ||
      (escolhaUsuario === 2 && escolhaDoPc === 2) ||
      (escolhaUsuario === 3 && escolhaDoPc === 3)
    ) {
      console.log(
        `Você escolheu ${
          lista[escolhaUsuario - 1]
        }, e o seu adversário escolheu ${lista[escolhaDoPc - 1]} `
      );
      console.log(" ################## Você empatou nessa roda!! ###############################");
      empate++;

    } 
    else {
      console.log(
        `Você escolheu ${
          lista[escolhaUsuario - 1]
        }, e o seu adversário escolheu ${lista[escolhaDoPc - 1]} `
      );
      console.log(" ################### Você perdeu a roda!! #####################################");
      winPc++;
    }
  }

  if (winU > winPc) {
    console.log(`Você é o grande campeão desse jogo. Humanos no poder!!
        Vitóias: ${winU},
        Derrotas: ${winPc},
        Empates: ${empate}`);
  } else if (winU < winPc) {
    console.log(`Você é uma vergonha, está deixando as máquinas dominarem. Já assitiu o filme o Exterminador do futuro?? !!
        Vitóias: ${winU},
        Derrotas: ${winPc},
        Empates: ${empate}`);
  
  }
}
}

jogo();

restart = prompt("Deseja continuar? digite sim ou não ").toLowerCase();

while (restart.toLowerCase() == "sim" && restart.toLowerCase() == "nao") {
    restart = prompt("Deseja continuar? digite sim ou não ")
}

if (restart == "sim") {

    console.log("****************** Vamos lá? ************************* ")
    jogo();

} else {

    console.log("Fim de Jogo!");
    
}
