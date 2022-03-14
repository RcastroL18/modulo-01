// exercício 02 da aula 4 completo
console.clear();

//const prompt = require("prompt-sync")();


/* let numero = +prompt("Advinhe o número gerado pela máquina ");

function getRandomInt(resultadoDaFuncao) {

    return Math.floor(Math.random() * 10 + 1 )
}
let resultado = getRandomInt(numero) 

if (numero == resultado) {
    console.log("Parabéns, você acertou o número")
}
else {
    console.log(`Você errou, o número gerado pela máquina foi ${resultado}`)
}
*/

// Exercício 3 caixa eletrônico (Necessário termina-lo)

/* console.log("Bem vindo ao Caixa eletrônico. ");
console.log();
console.log("A máquina dispoem de notas nos valores de 1, 5, 10, 50 e 100.")

let valor = +prompt("Digite o valor de saque desejado ");

if (valor < 10 || valor > 600) {
    console.log("Valor indisponível");
}
let quantidadeDeNotas = +prompt("Quantas notas você deseja?")
else if ( )
*/

var prompt = require("prompt-sync")();

let pergunta1,
  pergunta2,
  pergunta3,
  pergunta4,
  pergunta5,
  contador,
  final,
  continue_;
do {
  console.log(
    "Zuran um poderoso guerreiro que havia sido morto, misteriosamente retorna e inicia uma insaciável busca por poder e conquista das terras e povos de Meridium, usando de toda sua força e crueldade para isso.  Lariev um jovem paladino é convocado pelo conselho de Aziev, por ser descendente daquele que derrotou Zuran e o único capaz de portar a Espada de Terebro a que tudo perfura. Orientado pelos sábios embarca em sua aventura mais desafiadora, derrotar Zuran e trazer paz e justiça por toda Meridium.\n"
  );

  contador = 0;
  pergunta1 = prompt(
    "1 - Você encontrou a ilha de Terra-mar, achando o Senhor das Armas, para lhe ensinar as técnicas ocultas da Espada de Terebro?(s/n)\n"
  );
  if (pergunta1 != "não" && pergunta1 != "n") {
    contador++;
  }

  pergunta2 = prompt(
    "2 - Nas fronteiras do novo domínio de Zuram, ao encontrar uma criatura de forma Élfica, você aceitou sua ajuda, um elixir?\n"
  );
  if (pergunta2 != "não" && pergunta2 != "n") {
    contador++;
  }
  pergunta3 = prompt(
    "3 - Ao derrotar um Feiticeiro das forças do inimigo, você obteve a pedra Omnia reveals.\n"
  );
  if (pergunta3 != "não" && pergunta3 != "n") {
    contador++;
  }
  pergunta4 = prompt(
    "4 - Você conheceu Tarus um anão do Condado de Ori? E com o intuito de fazer o possível para te ajudar na sua missão, forjou um escudo especial para você, um escudo capaz de criar uma áurea que te oculta sob a luz.\n"
  );
  if (pergunta4 != "não" && pergunta4 != "n") {
    contador++;
  }
  pergunta5 = prompt(
    "5 - Antes de entrar em embate com Zuran, você dedidiu espionar seu covil,  utilizando o poder do seu escudo?\n"
  );
  if (pergunta5 != "não" && pergunta5 != "n") {
    contador++;
    final = true;
  }

  if (contador == 0) {
    console.log("Você foi totalmente derrotado.");
  } else if (contador == 1 || contador == 2) {
    console.log("Você falhou, porém conseguiu escapar");
  } else if (contador == 3) {
    console.log("Você chegou perto de conseguir destruir Zuran");
  } else if (contador == 4) {
    console.log(
      "Todo seu treinamento é recompensando ao derrotar Zuran, finalmente Meridium tem a perspectiva de paz novamente, porém ainda se mantêm misterioso o ressurgimento de Zuran do mundo dos mortos."
    );
  } else if (contador == 5 && final == true) {
    console.log(
      "Lariev ao entrar de forma oculta no Covil de Zuran, encontra Abadon, um poderoso feiticeiro do Magistério de Meridium, de boa fama por todos os povos, mas um ser polêmico pelo Conselho. Ele foi o responsável por trazer Zuran do mundo dos mortos, utilizando-o como fantoche para sua vontade. Com o poder da pedra Omni Reveals, Lariev pôde ver a ligação de Zuran e de Abadon, quebrando o enlace e inutilizando Zuran, agora podia lutar destemidamente contra o verdadeiro inimigo, Abadon. Meridium agora prospera e os tempos de aflição ficaram para trás, Lariev entrou na história, porém, continuou modesto e se aventurando ajudando aqueles que o invocavam."
    );
  }
  continue_ = prompt("\nVocê deseja continuar (s/n)?");
} while (
  continue_ == "sim" ||
  continue_ == "s" ||
  continue_ == "S" ||
  continue_ == "SIM"
);
