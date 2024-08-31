const prompt = require('prompt-sync')(); // Inicializa o prompt

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let num = Number(prompt("Digite um número para saber seu fatorial: "))


function factorial(num) {
    if(num === 0 || num === 1) { // Todo fatorial de 1 e 0 é igual a 1
        return console.log("O Valor fatorial é 1!")
    }

    for(let i = num - 1; i > 0; i--) { // É decrescido 1 para poder fazer * o número após o que o usuário digitou EX: num = 5, i = 4 e vai continuar descrescendo até ser 1
        num *= i // Lógica feita
    }

    return console.log(`O Valor fatorial é ${num}`)
}

factorial(num) // Chama a função