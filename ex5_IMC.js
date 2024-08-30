const prompt = require('prompt-sync')() // Inicializando Prompt

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

console.log("Calculadora de IMC:")
let height = Number(prompt('Insira sua altura: '))
let weight = Number(prompt('Insira seu peso: '))
let calc = weight / height ** 2 // Calculo do IMC

if (calc >= 0) { // Verifica se o valor está correto
    if(calc < 18.5) { // Verificações do IMC
        console.log(`Seu IMC é ${calc.toFixed(2)} e você está em baixo peso!`)
    } else if(calc <= 24.9) {
        console.log(`Seu IMC é ${calc.toFixed(2)} e você está em peso normal!`)
    } else if(calc <= 29.9) {
        console.log(`Seu IMC é ${calc.toFixed(2)} e você está em sobrepeso!`)
    } else {
        console.log(`Seu IMC é ${calc.toFixed(2)} e você está em obesidade!`)
    }
} else {
    console.log("Algo deu errado! Verifique os valores colocados.")
}