const prompt = require("prompt-sync")(); // Inicializa o prompt

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

function multiTable() { // Usei function para passar variaveis para o for
    let num = Number(prompt("Insira um número para saber a tabuada dele: "))

    for(let i = 1; i < 11; i++) { // Lógica para fazer a tabuada
        let result = i * num
        console.log(`${num} x ${i} = ${result}`) // Impressão da tabuada
    }
}

multiTable()