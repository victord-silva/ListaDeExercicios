const prompt = require('prompt-sync')() // Inicializando Prompt

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let note = Number(prompt('Insira a nota: '))
let classification

if(note >= 0 && note <= 10) { // Caso a nota inserida pelo usuário seja menor que 0 e maior do que 10 automaticamente será invalidado
    if(note >= 0 && note <= 4) { // Validação
        classification = 'Está Reprovado!'
    } else if(note >= 5 && note <= 7) { // Validação
        classification = 'Está de Recuperação!'
    } else {
        classification = 'Parabéns! Aprovado!'
    }
} else {
    classification = "Nota inválida!"
}

console.log(classification)