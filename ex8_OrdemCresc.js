const prompt = require('prompt-sync')() // Inicializando Prompt

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let value1 = Number(prompt("Insira um valor: "))
let value2 = Number(prompt("Insira mais um valor: "))
let bigger

if(value1 != value2) {
    if(value2 > value1) {
        bigger = value2
        console.log(`O maior valor é ${bigger}`)
    } else {
        bigger = value1
        console.log(`O maior valor é ${bigger}`)
    }
} else {
    console.log("Coloque valores diferentes!") // Entra aqui se forem iguais
}