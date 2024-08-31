const prompt = require("prompt-sync")(); // Inicializa o prompt

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.  

console.log("Faça a inserção de números decimais para fazer a média aritmética, quando não quiser mais aperte [0]")

function avg() { // Função para poder retornar as variáveis fora do "While"

    let sumNum = 0 // No while inica-se um valor para a variavel antes para que não retorne undefined
    let count = 0 // No while inica-se um valor para a variavel antes para que não retorne undefined
    let num = 1 // Define-se como 1 para poder entrar sempre no while

    while(num !== 0) { // Repete o prompt até que o usuário digite 0
        num = Number(prompt("Insira um número decimal: ")) // Recebe o valor do usuário
        sumNum = sumNum + num // Soma o valor fornecido pelo usuário em outra variável
        count++ // Incrementa a cada loop para poder calcular a media aritmética
        if (sumNum === 0) { // Caso o usúario passe 0 na primeira requisição, ja irá cair nessa condicional, pois sumNum será 0 no primeiro loop
            return console.log("A média aritmética é igual a 0!")
        }
    }
    count-- // Tirar um incremento, pois o loop irá rodar mais uma vez após o usuário apertar 0 e caso o usuário digite 1 número só, a lógica iria dividir por 2
    let result = sumNum / count 
    return console.log(`A média aritmética é igual a ${result.toFixed(2)}`) // Não consegui tratar para que só recebe números decimais, mas transformei o resultado em decimais.
}

avg() // Chama a função para executar a lógica