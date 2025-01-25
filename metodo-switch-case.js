let nomeDoHeroi = "Arthur, The King";
let nivelDoHeroi = 7000;
let classificacaoDoHeroi = "";

switch (true) {
    case nivelDoHeroi <= 1000:
        classificacaoDoHeroi = "Ferro"
        break
    case nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000:
        classificacaoDoHeroi = "Bronze"
        break
    case nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000:
        classificacaoDoHeroi = "Prata"
        break
    case nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000:
        classificacaoDoHeroi = "Ouro"
        break
    case nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000:
        classificacaoDoHeroi = "Platina"
        break
    case nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000:
        classificacaoDoHeroi = "Ascendente"
        break
    case nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000:
        classificacaoDoHeroi = "Imortal"
        break
    case nivelDoHeroi >= 10001:
        classificacaoDoHeroi = "Radiante"
        break
}

console.log("O herói de nome " + nomeDoHeroi + " " + "está no nível" + " " + nivelDoHeroi + " " + "com classificação" + " " + classificacaoDoHeroi);

