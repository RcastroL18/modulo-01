console.log();
console.clear();

let filmes = ["Tubarao","Harry Potter", "Jurassic Park", "Lala Land" ];

let filmeNovo = prompt("Digite um novo filme");

filmes.push(filmeNovo);
console.log();

let verificaFilme = ("Digite um filme para verificar se existe.");

if (filmeNovo.includes(verificaFilme)) {
    console.log(`o filme ${verificaFilme} está na lista`);
}
 else {
     console.log("O filme não existe")
 }
