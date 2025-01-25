let nomeDoHeroi = "Arthur, The King";
let nivelDoHeroi = 5201;
let classificacaoDoHeroi = "";

if (nivelDoHeroi <= 1000) {
    classificacaoDoHeroi = "Ferro";
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    classificacaoDoHeroi = "Bronze";
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
    classificacaoDoHeroi = "Prata";
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    classificacaoDoHeroi = "Ouro"
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    classificacaoDoHeroi = "Platina Diamante"
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    classificacaoDoHeroi = "Ascendente"
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
    classificacaoDoHeroi = "Imortal"
} else {
    classificacaoDoHeroi = "Radiante"
}

console.log("O herói de nome " + nomeDoHeroi + " " + "está no nível" + " " + nivelDoHeroi + " " + "com classificação" + " " + classificacaoDoHeroi);



