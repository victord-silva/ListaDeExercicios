const prompt = require('prompt-sync')() // Inicializando Prompt

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let age = Number(prompt('Informe a sua idade: '))
let ageRange

if (age >= 0 && age <= 12) {
    ageRange = 'Você é Criança!'
} else if (age >= 13 && age <= 17) {
    ageRange = 'Você é Adolescente'
} else if (age >= 18 && age <= 60) {
    ageRange = 'Você é Adulto'
} else if (age >= 61 && age <= 117){
    ageRange = 'Você é Idoso'
} else {
    ageRange = 'Parabéns! Você quebrou o recorde de pessoa mais velha do mundo!'
}

console.log(ageRange)