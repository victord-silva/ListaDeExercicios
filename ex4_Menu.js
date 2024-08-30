const prompt = require('prompt-sync')() // Inicializando Prompt

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("------------XCaixaGamePass------------")
console.log("                   Carteira: R$ 300,00")
console.log("[1] Black Myth Wukong: R$ 299,99")
console.log("[2] Red Dead Redemption 2: R$ 180,99")
console.log("[3] AC Shadows: R$ 250,99")
console.log("")
console.log("--------------------------------------")

let option = Number(prompt("Escolha entra as opções [1], [2] ou [3] para comprar um jogo novo: "))

switch(option) {
    case 1:
        console.log("Você comprou Black Myth Wukong, bom divertimento!")
        console.log("Sobrou R$0,01 na sua carteira!")
        break;
    case 2:
        console.log("Você comprou Red Dead Redemption 2, bom divertimento!")
        console.log("Sobrou R$119,01 na sua carteira!")
        break;
    case 3:
        console.log("Você comprou AC Shadows, bom divertimento!")
        console.log("Sobrou R$49,01 na sua carteira!")
        break;
    default:
        console.log("Escolha uma opção entre as três!")
}