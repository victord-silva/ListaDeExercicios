const prompt = require('prompt-sync')(); // Inicializa o prompt

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let num1 = 0 //Inicia-se 3 variaveis para poder fazer a lógica de fibonacci
let num2 = 1 // Seria o proximo número
let sum = 0 // Vai armazenar a soma
let fibonacci = ""

fibonacci += num1 + " " + num2;

for(let i = 1; i <= 8; i++) { // Vai imprimir 10 números, pois a variável fibonacci possui 2 valores
    sum = num1 + num2
    fibonacci += " " + sum
    num1 = num2
    num2 = sum
}

console.log(fibonacci)