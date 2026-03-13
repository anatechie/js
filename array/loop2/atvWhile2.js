/*Atividade 2 - Contar quantos números foram digitados
Faça um programa que leia números digitados pelo usuário. O laço deve continuar
até a pessoa digitar -1. Ao terminar, mostre quantos números foram informados, sem
contar o -1*/

const prompt = require('prompt-sync')();
let num;
let i = 0;

while(num !== -1){
    num = Number(prompt("Digite um número: "));
    i++;
    if(num === -1){
        console.log(`Você digitou ${i -1} vezes`);
    }
// console.log(` ${i}º número`)
}
console.log('Quantidade dos numeros digitados: ', i);










