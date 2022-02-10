
// exercicio de laços 
//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
//Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//c) Por fim, imprima o array com os nomes dos bichinhos no console

ArrayBichinhos = []

let bichinhos = Number(prompt("quantos bichinhos tu tem?")) //colocar number p converter a resposta p numeros, se nao ele le como string  
if (bichinhos === 0) {
  console.log("Que pena! Você pode adotar um pet!")
}
else {
  for (let b = 0; b < bichinhos; b++) {
    let nomeBichinhos = prompt("digite o nome deles")
    ArrayBichinhos.push(nomeBichinhos) // array guarda as informaçoes que passa, tem q ficar dentro do escopo
  }
  console.log(ArrayBichinhos)
}
// comentarios add: criei um variavel bichinhos para guardar a quantidade que o usuario vai incluir no prompt, o if vai dar o primeiro retorno 
// ... se a resposta inserida do usuario for 0 o console.log vai da a msg X, se for maior (else é qlq coisa q seja diferente de if) p laço
// ...vai dizer q se for igual a 0 e menor q bichinhos ele vai adicionar +1 (lembrando q bichinhos é o valor q o usuario inseriu, caso queria
//... q seja um valor x é so substiruir pelo numero desejado, e lembrando tbm que o array é sempre +1 ou seja, se colocar >=5 ira aparecer 6)


// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("informe qual a altura do retangulo"))
  const largura = Number(prompt("informe qual a largura do retangulo"))
  return altura * largura
}
console.log("a area do retangulo é", calculaAreaRetangulo())
// comentarios add: função ja criada, para receber um numero é necessario por um Number pq se nao vai chegar como string e nao vai calcular
//lembrar de sempre chamar a função fora do escopo



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoDeNascimento = prompt("digite teu ano de nascimento")
  return 2022 - anoDeNascimento
}
console.log("em 2022 tu faz", imprimeIdade(), "anos")
// comentarios add: função ja criada, promt criada para receber o ano de nascimento do usuario, return com a subtração  e um console.log 
// chamando a função fora do escopo
//tudo q for depois do return ele nao é execultado (dentro do escopo), o retun é a linha final do codigo


// EXERCÍCIO 03 IMC = Peso ÷ (Altura × Altura)
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso * altura
}




// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual teu nome?")
  const idade = prompt("qual a sua idade?")
  const email = prompt("qual teu email?")
  console.log("Meu nome é", nome, "tenho", idade, "anos,", "e o meu email é", email, ".")
}
// comentarios add: função ja criada, prompt criada para perguntar dados do cliente e console.log chamando cada resposta
// ps: nao esquecer a virgula


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let todasAsCores = [];
  let corFavorita1 = prompt("qual a sua cor favorita?")
  let corFavorita2 = prompt("qual a sua segunda cor favorita?")
  let corFavorita3 = prompt("qual a sua terceira cor favorita?")
  todasAsCores.push(corFavorita1, corFavorita2, corFavorita3);
  console.log(todasAsCores)
}
imprimeTresCoresFavoritas()
// comentarios add: função ja criada, push para juntar todas as cores no array.
//lembrar de declarar o array vazio, e colocar push dentro do escopo


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui 
  console.log(string.toUpperCase())
} retornaStringEmMaiuscula()
//toUpperCase transforma a string em maiuscul. ps: lembrar de chamar a função fora do escopo

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}


// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  // imple(mente sua lógica aqui
  return string1.length === string2.length
}
checaStringsMesmoTamanho()
//console.log(checaStringsMesmoTamanho("string1", "string2"))

//teste
/* let testando1 = "juliana"
let testando11 = "fernanda"
console.log(testando1.length === testando11.length) */




// EXERCÍCIO 09  

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  console.log(array[0])
}
retornaPrimeiroElemento()
//criado vazio
/*   (teste)
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
const listaNumesros= [ 1, 2, 3, 4, 5]
console.log (listaNumesros[0])
  }
  retornaPrimeiroElemento () */
//comentarios add: função ja criada, 



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  console.log(array[array.length - 1])
}
retornaUltimoElemento()
//let arrayteste=[1, 2, 3, 4, 5, 6]
// console.log (arrayteste[arrayteste.length-1])
//para pegar o indice tem que estar dentro do []


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const tamanhoDoArray = array.length
const primeiroElemento = array[0] 
const ultimoElemento = array[tamanhoDoArray - 1]
  array[0] = ultimoElemento
  array[tamanhoDoArray -1] = primeiroElemento 
  return array
} 
trocaPrimeiroEUltimo (1,2,3,4)

/*  let arrayteste=[1, 2, 3, 4, 5, 6]
 arrayteste.reverse();
 console.log(arrayteste) */

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let primeiraString = string1.toUpperCase()
  let segundaString = string2.toUpperCase()
  return primeiraString === segundaString
}



// EXERCÍCIO 12A
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
  return  string2.toUpperCase() === string1.toUpperCase()
}
  

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}


//##############################################################################
//exercicio laços 
//1.A
const pessoa = {
  nome: "Amandaa",
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

console.log("Eu sou", pessoa.nome, ", mas pode me chamar de:", pessoa.apelidos[0], ",", pessoa.apelidos[1], "ou", pessoa.apelidos[2])
//duvida, como deixar a virgula sem espaço

//1.B
const pessoa = {
  nome: "Amandaa",
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const novaPessoa = {
  ...pessoa,
  apelidos: ["fofa", "chata", "extressadinha"]

}
console.log(novaPessoa)

//2.A
const primeiraPessoa = {
  nome: "Bruno",  
  idade: 23,
  profissao: "Instrutor"
}
const segundaPessoa = {
  nome: "Daniel",  
  idade: 30,
  profissao: "ator"

}
const dadosPessoa = {
  dados: primeiraPessoa.nome,
  ...idade, ...profissao
}
console.log(dadosPessoa)

//2.b

const primeiraPessoa = {
  nome: "Bruno",  
  idade: 23,
  profissao: "Instrutor"
}
const segundaPessoa = {
  nome: "Daniel",  
  idade: 30,
  profissao: "ator"

}
function dadosPessoa (primeiraPessoa, segundaPessoa) {
return primeiraPessoa.length, segundaPessoa.length
}
  dadosPessoa()
 //exercicio 2.b incorreto

 //3.A
 arrayCarrinho = []
 const fruta1= {
   fruta:"pera",
   disponibilidade: true,
 }
 const fruta2= {
  fruta:"uva",
  disponibilidade: true,
 }
 const fruta3= {
  fruta:"pitaya",
  disponibilidade: false,
 }
 
 function carrinhoDeFrutas (item) {
 arrayCarrinho.push(itccem) 
 
 }
 carrinhoDeFrutas(fruta1)
 carrinhoDeFrutas(fruta2)
 carrinhoDeFrutas(fruta3)
 console.log(arrayCarrinho )
 
   //parametro é somente uma referencia, pode colocar qlq nome, e invocar a função. 
//o push pega coisas e poe dentro do array, acumular mais 


// Exercícios de condicionais  - Exercícios 2 e 3

let mensagemDeEntrada = prompt("Ola, em qual horario tu estuda? (atente-se a por M para matutino, V para vespertino e N para noturno")
if (mensagemDeEntrada === "M") {
    console.log("Bom dia!")
}

else if (mensagemDeEntrada === "V") {
    console.log("boa tarde!")
}

else if (mensagemDeEntrada === "N")
    console.log("boa noite")

//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
let mensagemDeEntrada = prompt("Ola, em qual horario tu estuda? (atente-se a por M para matutino, V para vespertino e N para noturno")
switch (mensagemDeEntrada) {
    case 'M':
        console.log('bom dia')
        break
    case 'V':
        console.log('boa tarde')
        break
    case 'N':
        console.log('boa noite')
        break
}

// Exercícios de Laços: 1 e 2
const arrayBichinhos = []

let bichinhos = Number(prompt("quantos bichinhos tu tem?"))
if (bichinhos === 0) {
  console.log("Que pena! Você pode adotar um pet!")
}
else {
  for (let b = 0; b < bichinhos; b++) {
      let nomeBichinhos = prompt("digite o nome deles")
      arrayBichinhos.push(nomeBichinhos)
  }
  console.log(arrayBichinhos)
}

// 2
arrayOriginal =  [5, 22, 98, 121, 10]

//a) Escreva um programa que **imprime** cada um dos valores do array original.

function valorDoArrayOriginal (arrayOriginal) {
 for(let valor of arrayOriginal){
   console.log(valor)
 }
}
valorDoArrayOriginal(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores
//do array original divididos por 10.

function valorDoArrayOriginal (arrayOriginal) {
for(let valor of arrayOriginal){
  console.log(valor/10)
}
}
valorDoArrayOriginal(arrayOriginal)

//c) Escreva um programa que **crie** um novo array contendo,somente, os números pares 
//do array original e **imprima** esse novo array.

function valoresPares (arrayOriginal) {
 let arrayNumerosPares = []
 for(let valor of arrayOriginal){
   if(valor % 2 === 0){
     arrayNumerosPares.push(valor)
   }

 }
console.log(arrayNumerosPares)
}
valoresPares(arrayOriginal)

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.


//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
