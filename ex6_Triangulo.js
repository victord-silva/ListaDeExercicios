const prompt = require('prompt-sync')() // Inicializando Prompt

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

let side1 = Number(prompt("Insira o primeiro lado do triângulo: "))
let side2 = Number(prompt("Insira o segundo lado do triângulo: "))
let side3 = Number(prompt("Insira o terceiro lado do triângulo: "))

if(side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) { // Verifica se é um triangulo
    if(side1 == side2 || side1 == side3 || side2 == side3) { // Verifica se é Isósceles ou Equilátero
        if(side1 == side2 && side2 == side3) { // Verifica se é equilátero
            console.log("Forma um triângulo equilátero!")
        } else {
            console.log("Forma um triângulo isósceles!") // Se não cair na condicional do equilátero é Isósceles
        }
    } else {
        console.log("Forma um triângulo escaleno!") // Se não for nenhum desses é escaleno
    } 
} else {
    console.log("Os valores fornecidos não formam um triângulo!")
}

