const prompt = require('prompt-sync')() // Inicializando Prompt

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num = Number(prompt('Digite um número para descobrir se é PAR ou IMPAR: '));

num % 2 == 0 ? console.log("PAR!") : console.log("IMPAR!"); // Verificação em IF Ternário