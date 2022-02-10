//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V 
//(Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

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

// exercicio de laços 
//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
//Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//c) Por fim, imprima o array com os nomes dos bichinhos no console

ArrayBichinhos = []

let bichinhos = Number(prompt("quantos bichinhos tu tem?"))
if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
else {
    for (let b = 0; b < bichinhos; b++) {
        let nomeBichinhos = prompt("digite o nome deles")
        ArrayBichinhos.push(nomeBichinhos)
    }
    console.log(ArrayBichinhos)
}
//##########################################################################################################
//EXERCICIOS JS1

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = Number(prompt("informe qual a altura do retangulo"))
    const largura = Number(prompt("informe qual a largura do retangulo"))
    return altura * largura
}
console.log("a area do retangulo é", calculaAreaRetangulo())




// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoDeNascimento = prompt("digite teu ano de nascimento")
    return 2022 - anoDeNascimento
}
console.log("em 2022 tu faz", imprimeIdade(), "anos")




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








// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui 
    console.log(string.toUpperCase())
} retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    return custo / valorIngresso
}

// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
    // imple(mente sua lógica aqui
    //return string1.length = string2.length
    return (string1 === string2)

}
checaStringsMesmoTamanho()
//console.log(checaStringsMesmoTamanho("string1", "string2"))









// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    console.log(array[0])
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    console.log(array[array.length - 1])
}
retornaUltimoElemento()



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const tamanhoDoArray = array.length
    const primeiroElemento = array[0]
    const ultimoElemento = array[tamanhoDoArray - 1]
    array[0] = ultimoElemento
    array[tamanhoDoArray - 1] = primeiroElemento
    return array
}
trocaPrimeiroEUltimo([1, 2, 3, 4])


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
function dadosPessoa(primeiraPessoa, segundaPessoa) {
    return primeiraPessoa.length, segundaPessoa.length
}
dadosPessoa()
//exercicio 2.b incorreto

//3.A
arrayCarrinho = []
const fruta1 = {
    fruta: "pera",
    disponibilidade: true,
}
const fruta2 = {
    fruta: "uva",
    disponibilidade: true,
}
const fruta3 = {
    fruta: "pitaya",
    disponibilidade: false,
}

function carrinhoDeFrutas(item) {
    arrayCarrinho.push(item)

}
carrinhoDeFrutas(fruta1)
carrinhoDeFrutas(fruta2)
carrinhoDeFrutas(fruta3)
console.log(arrayCarrinho)

//parametro é somente uma referencia, pode colocar qlq nome, e invocar a função. 
//o push pega coisas e poe dentro do array, acumular mais 


// Exercícios de condicionais  - Exercícios 2 e 3
//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
function horarioEstudo() {
    let mensagemDeEntrada = prompt("Ola, em qual horario tu estuda? (atente-se a por M para matutino, V para vespertino e N para noturno")
    if (mensagemDeEntrada === "M") {
        console.log("Bom dia!")
    }

    else if (mensagemDeEntrada === "V") {
        console.log("boa tarde!")
    }

    else if (mensagemDeEntrada === "N")
        console.log("boa noite")
}
horarioEstudo()
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
function horarioEstudoSwitch() {
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
}
horarioEstudoSwitch()

// Exercícios de Laços: 1 e 2
// 1 Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
/* a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console */
function quantidadePets() {
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
}
quantidadePets()


// 2 Considere que você tenha acesso a um array  (chamado de 'array original') 
//que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
arrayOriginal = [5, 22, 98, 121, 10]

//a) Escreva um programa que **imprime** cada um dos valores do array original.
function valorDoArrayOriginal(arrayOriginal) {
    for (let b = 0; b < arrayOriginal.length; b++) {
        //console.log(`indice:${b}, valor: ${arrayOriginal[b]}`)    <=teste    ###REFEITO
        console.log(arrayOriginal[b])
    }
}
valorDoArrayOriginal(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10.
function valorDoArrayOriginal(arrayOriginal) {
    for (let valor of arrayOriginal) {
        console.log(valor / 10)
    }
}
valorDoArrayOriginal(arrayOriginal)
//c) Escreva um programa que **crie** um novo array contendo,somente, os números pares do array original e **imprima** esse novo array.
function valoresPares(arrayOriginal) {
    let arrayNumerosPares = []
    for (let valor of arrayOriginal) {
        if (valor % 2 === 0) {
            arrayNumerosPares.push(valor)
        }
    }
    console.log(arrayNumerosPares)
}
valoresPares(arrayOriginal)

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.
const arrayOriginal = [2, 3, 8, 10]
function imprimirNovoArray(arrayOriginal) {
    const novoarray = []                                    // REFEITO
    for (let i = 0; i < arrayOriginal.length; i++) {
        const frase = (`O elemento do índex:${i} é: ${arrayOriginal[i]}`)
        novoarray.push(frase)
    }
    console.log(novoarray)
}
imprimirNovoArray(arrayOriginal)


//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
// ## nao consegui pensar em uma logica de resolução, nem entender os exemplos

/* function maiorNumeroDoArray () {
   const numeros = []
   let i = 0
   let maior = - Infinity
   while (i < numeros.length) {
       if (numeros[i] > maior) {
           maior = numeros[i]
       }
       i++
   }
   console.log(`o maior numero é ${maior}`)
   }
   maiorNumeroDoArray () */



//Exercícios de callback: 1 e 2
//1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
//a) Crie um novo array que contenha apenas o nome dos doguinhos
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
const nomePet = produtos.map(item => item.nome)
//b) Crie um novo array apenas com os cachorros salsicha
const raçaSalsicha = pets.filter(item => item.nome === 'Salsicha')
console.log(nomePet, raçaSalsicha)
// c                                                                                    ### REFEITO
const filtrarPoodles = pets.filter(item => item.raca === "Poodle")
const descontoPoodles = filtrarPoodles.map((elementoPoodle) => {
    console.log(elementoPoodle)
    return `Você ganhou um cupom de desconto de 10% para tosar o/a, ${elementoPoodle.nome}`
})
console.log(descontoPoodles)


// 2 Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter: 
//  a) Crie um novo array que contenha apenas o nome de cada item
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
const nomePet = produtos.map(item => item.nome)
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoNosProdutos = produtos.map((item) => {
    console.log(item) // colocar o console.log para teste p ve o q ele ta recebendo mas lembrar de apaga-lo
    const novoItem = {
        nome: item.nome,
        preco: item.preco * 0.95                                            //### REFEITO 

    }
    return novoItem
})
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const produtosBebidas = produtos.filter(item => item.categoria === "Bebidas")
//ou
// const produtosBebidas = produtos.filter(item => item.nome.toLowerCase() === "bebidas") //toLowerCase usado para converter em minusculo
//em projetos é sempre bom por toLowerCase pq o valor pode estar diferente ou toUpperCase (deixar todas iguas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter(item => item.nome.includes("Ypê"))           // REVISAR INCLUDEs JS


//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases
// apenas dos itens cujo nome contenha a palavra "Ypê"
const produtosIpe
//raciocinio do pooble
// fazer map                                            ##FAZER E ENVIAR 






//exercicios Lista JS2: 4, 5, 6(usando laço), 9,12, 13 e 14
// 4 - Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
//arrayDeNumeros []
function arrayDeNumeros(array) {
    let arrayPar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i]);
        } consolelog(arrayPar)
    }

    return arrayPar
}
arrayDeNumeros()  // nao precisa por a chamada se nao for usar.

//5 - Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function arrayElevadoADois(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            novoArray.push(array[i] * array[i]);
        }
    }

    console.log(novoArray) /// sempre lembrar de apagar o console.log pq ele é so p testar (deixa poluido)
    return novoArray
}
arrayElevadoADois()
// 6- Escreva uma função que receba um array de números e retorne o maior número dele.
function maiorNumeroDoArray() {
    const numeros = []
    let i = 0
    let maior = - Infinity
    while (i < numeros.length) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        i++
    }
    return maior
}
maiorNumeroDoArray()

//9 - Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, 
//isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).
/*  - O que define os tipos de triângulo?
   - Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero".
   - Se possuir apenas **dois lados iguais**, diz-se que ele é "Isósceles".
   - Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". */
function tiposDeTriangulos(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// 12 -Crie uma função que recebe um objeto com as propriedades nome, idade, endereco
// e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome. 
function pessoaAnonima(pessoa) {
    /* const pessoa = {
        nome: "Astrodev",
        idade: 25,                                  // nao precisa colocar os dados pq o paramentro ja tras 
        email: "astrodev@labenu.com.br",
        endereco: "Rua do Futuro, 4"
    } */
    const novaPessoa = {
        ...pessoa,
        nome: "Anonimo"
    }


    return novaPessoa
}
pessoaAnonima()

// 13 - As regras para entrar na montanha russa do terror são: 
/* - Ter, no mínimo, 1.5m de altura;
- Ser mais velho do que 14 anos e
- Ser mais novo do que 60 anos.
A) uma função que receba um array e devolva outro contendo as pessoas que tem permissão para entrar no brinquedo */

function autorizacaoDeUsuarios(array) {
    const liberacaoUsuario = []
    for (i = 0; i < array; i++) {
        if (usuario.altura > 1.5 && usuario.idadeMinima >= 14 && usuario.idadeMaxima <= 60) {
            liberacaoUsuario.push(array)
        }
        return liberacaoUsuario
    }
}
autorizacaoDeUsuarios()

//B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo
function recusaDeUsuarios(array) {
    const recusaUsuario = []
    for (i = 0; i < array; i++) {
        if (usuario.altura < 1.5 && usuario.idadeMinima <= 14 && usuario.idadeMaxima >= 60) {
            recusaUsuario.push(array)
        }
        return recusaUsuario
    }
}
autorizacaoDeUsuarios()

// 13 - As regras para entrar na montanha russa do terror são: 
/* - Ter, no mínimo, 1.5m de altura;
- Ser mais velho do que 14 anos e
- Ser mais novo do que 60 anos.
A) uma função que receba um array e devolva outro contendo as pessoas que tem permissão para entrar no brinquedo */

function autorizacaoDeUsuarios(array) {                     // REFEITO
    const liberacaoUsuario = []
    for (let usuario of array) {
        if (usuario.altura > 1.5 && usuario.idadeMinima >= 14 && usuario.idadeMaxima <= 60) {
            liberacaoUsuario.push(usuario)
        }
        return liberacaoUsuario
    }
}
autorizacaoDeUsuarios()
// criou uma função q recebeu parametro, variavel de array criada para receber usuarios liberados, laço for rodando para chegar no
//fim do array e if criado para filtrar dentros das regras solicitadas, o push armazena os dados para array,
// e o return retorna os dados solicitados (return nao imprime no console, para teste usar console.log)

//B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo
function recusaDeUsuarios(array) {    // refazer usando o  for of  E ENVIAR 
    const recusaUsuario = []
    for (let usuario of array) {
        if (usuario.altura < 1.5 && usuario.idadeMinima <= 14 && usuario.idadeMaxima >= 60) {
            recusaUsuario.push(usuario)
        }
        return recusaUsuario
    }
}
autorizacaoDeUsuarios()


//A sua tarefa é: faça uma função que receba um array com os objetos do tipo acima como 
//parâmetro e atualize o saldo total individual de cada um, sem criar um novo array. Retorne o array original. 

function contaCliente() {

    [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
}
const atualizarSaldo = produtos.map((item) => {
    console.log(item) // colocar o console.log para teste p ve o q ele ta recebendo mas lembrar de apaga-lo
    const novoItem = {
        saldoTotal - compras

}
    return novoItem
})