const prompt = require('prompt-sync')() // Inicializando Prompt

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = Number(prompt("Insira um número inteiro: "))

if(num % 1 == 0) { // Verifica se é um número inteiro
    for(let i = 0; i < 10; i++) {
        console.log(num)
    }
} else {
    console.log("Por favor, insira um número inteiro!")
}