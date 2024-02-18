//Desafio Classificador de nível de Herói//
//NOVA VERSAO//
//VERSÃO TESTE PELO ROBERTO//
// Variáveis//
let nomeDoHeroi = "Super Herói";
let experienciaDoHeroi = 7500;

// Estrutura de decisão
if (experienciaDoHeroi < 1000) {
    console.log(nomeDoHeroi + " é do nível Ferro.");
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    console.log(nomeDoHeroi + " é do nível Bronze.");
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    console.log(nomeDoHeroi + " é do nível Prata.");
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    console.log(nomeDoHeroi + " é do nível Ouro.");
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    console.log(nomeDoHeroi + " é do nível Platina.");
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    console.log(nomeDoHeroi + " é do nível Ascendente.");
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    console.log(nomeDoHeroi + " é do nível Imortal.");
} else if (experienciaDoHeroi >= 10001) {
    console.log(nomeDoHeroi + " é do nível Radiante.");
}
