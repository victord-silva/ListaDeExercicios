const prompt = require("prompt-sync")(); // Inicializa o prompt

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.  

function arithmeticMean() {
    let actualNum
    let count

    while(num != 0) {
        let num = Number(prompt("Insira um número decimal: "))
        actualNum = actualNum + num
        count++
    }

    let calc = actualNum / count
    console.log(calc)
}

arithmeticMean()