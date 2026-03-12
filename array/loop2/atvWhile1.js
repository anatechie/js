/*Atividade 1 - Somar números até digitar 0
Crie um programa que peça números ao usuário usando entrada pelo teclado.
Enquanto o número digitado for diferente de 0, o programa deve continuar pedindo
novos valores e somando tudo. No final, mostre a soma total*/

const prompt = require('prompt-sync')();

let soma = 0;
let num 

while( num !== 0 ){
    num = Number(prompt('Digite um numero: '))
    soma += num
     
}
console.log(soma)




