/*Atividade 4 - Validar nota
Peça ao usuário uma nota entre 0 e 10. Enquanto o valor digitado estiver fora desse
intervalo, continue pedindo novamente. Quando a nota for válida, mostre a mensagem
"Nota válida!"*/

const prompt = require('prompt-sync')();

let arrayNota = [];
let nota = 0

while (nota <= 10) {
    nota = Number(prompt('Digite uma nota: '));

    if (nota <= 10) {
      arrayNota.push(nota) //fim

    }else{
        console.log(`Nota válida!`)
    }
}

console.log(arrayNota)







