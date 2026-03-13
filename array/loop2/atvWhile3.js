/*Atividade 3 - Somar apenas os positivos
Leia vários números com entrada do usuário usando while. O programa deve parar
quando a pessoa digitar 0. No final, mostre a soma apenas dos números positivos*/

const prompt = require('prompt-sync')();
let num;
let soma = 0;

while(num !== 0){
    num = Number(prompt("Informe um número: "));
    if (num > 0){
    soma +=  num
    }
}
console.log(`A soma dos numeros positivos é: ${soma}`)