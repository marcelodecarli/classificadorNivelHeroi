


function heroi(nomeHeroi, xpHeroi) {


    let heroiDados = {
        nome: "",
        nivel: 0,
        categporia: ""
    }

    if (xpHeroi >= 0 && xpHeroi <= 1000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Ferro"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 1000 && xpHeroi <= 2000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Bronze"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 2000 && xpHeroi <= 5000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Prata"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 5000 && xpHeroi <= 7000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Ouro"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 7000 && xpHeroi <= 8000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Platina"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 8000 && xpHeroi <= 9000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Ascendente"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi > 9000 && xpHeroi <= 10000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Imortal"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)
    } else if (xpHeroi > 10000) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Radiante"
        console.log(`O Herói de nome ${heroiDados.nome} está no nível de ${heroiDados.nivel} xp e sua categoria é ${heroiDados.categporia}`)

    } else if (xpHeroi < 0) {
        heroiDados.nome = nomeHeroi, heroiDados.nivel = xpHeroi, heroiDados.categporia = "Inválida"
        console.log(`O herói chamado ${heroiDados.nome} com valor de ${heroiDados.nivel} inválido. Coloque somente números positivos.`)
    }
  
}


 heroi("Ferro", 800)
heroi("Bronze", 1001)
heroi("Prata", 2500)
heroi("Ouro", 5500)
heroi("Platina", 7500)
heroi("Ascendente", 8500)
heroi("Imortal", 9500)
heroi("Radiante", 10500)
heroi("Qualquer", -1500)