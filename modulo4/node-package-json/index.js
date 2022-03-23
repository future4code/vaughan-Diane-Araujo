//Exercício 1
//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
//imprima no console uma mensagem que siga a seguinte estrutura:
const nome = process.argv[2]
let  idade = Number(process.argv[3])


console.log ("Olá,", nome, "! Você tem", idade," anos.")

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
idade = idade + 7
console.log ("Sua ideda daqui a 7 anos sera:", idade)

/* ou 

console.log ("Sua ideda daqui a 7 anos sera:", idade + 7)
 */
