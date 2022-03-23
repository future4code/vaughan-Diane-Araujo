
//Exercício 2 
//Crie uma aplicação Node que recebe uma string representando uma operação matemática 
//e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
//utilizando os 2 valores fornecidos.
let  primeiroValor = Number(process.argv[2])
let  segundoValor = Number(process.argv[3])

console.log ( "Resposta: add", primeiroValor +  segundoValor )
console.log ( "Resposta: sub", primeiroValor  - segundoValor )
console.log ( "Resposta: mult", primeiroValor *  segundoValor )
console.log ( "Resposta: div", primeiroValor /  segundoValor )
