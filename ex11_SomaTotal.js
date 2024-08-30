const prompt = require('prompt-sync')() // Inicializando Prompt

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

console.log("Insira 5 valores para somá-los")
console.log("")

function sumValues() { // Usei função para poder passar a variável dentro do for e depois   retornar ele
    let num
    let receiveNum = 0
    for(let i = 1; i < 6; i++) {
        num = Number(prompt(`Insira o ${i}° número: `))
        receiveNum = receiveNum + num
    }

    return console.log(`O resultado da soma dos valores foi ${receiveNum}`)
}

sumValues()