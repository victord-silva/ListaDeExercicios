const prompt = require('prompt-sync')() // Inicializando Prompt

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


function buyApples(purchasedApples) { // Usei função para facilitar o console.log()

    if(purchasedApples > 0) {
        if(purchasedApples < 12) {
            purchasedApples = purchasedApples * 0.3
            return console.log(`O total da compra foi de R$ ${purchasedApples.toFixed(2)}`)
        } else {
            purchasedApples = purchasedApples * 0.25
            return console.log(`O total da compra foi de ${purchasedApples.toFixed(2)}`)
        }
    } else {
        console.log("Número inválido!") // Se for negativo vai cair aqui
    }
}

let purchasedApples = Number(prompt("Quantas maçãs você deseja? "))
buyApples(purchasedApples)