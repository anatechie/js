//while
/**O programa define um número secreto entre 1 e 10. Use um laço while para continuar pedindo
ao usuário que adivinhe até ele acertar. Ao acertar, exiba "Parabéns!" */


const prompt = require('prompt-sync')()
const secreto = 7
let chute = 0 

while(chute !== secreto){
    chute = Number(prompt('Adivinhe o número de 1 a 10: ')) 
}

console.log("acertou")




