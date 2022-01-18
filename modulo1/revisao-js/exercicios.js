

// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
 }
 
 // EXERCÍCIO 0B
 function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')
 
   console.log(mensagem)
 }
 
 // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = Number(prompt("informe qual a altura do retangulo"))
   const largura = Number(prompt("informe qual a largura do retangulo"))
 return altura * largura
 }
 console.log ("a altura do retangulo é", calculaAreaRetangulo())
 
 // EXERCÍCIO 02
 function imprimeIdade() {
   // implemente sua lógica aqui
 const anoDeNascimento = prompt("digite teu ano de nascimento")
 return 2022 - anoDeNascimento
 }
 console.log ( "em 2022 tu faz",imprimeIdade (), "anos")
 
 // EXERCÍCIO 03 IMC = Peso ÷ (Altura × Altura)
 function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
 return peso * altura
 }
 
 // EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome = prompt("Qual teu nome?")
const idade = prompt("qual a sua idade?")
const email = prompt("qual teu email?")
console.log ("Meu nome é", nome, "tenho", idade, "anos,", "e o meu email é", email,".")

 
 // EXERCÍCIO 05
 function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   let todasAsCores = [];
 let corFavorita1 = prompt("qual a sua cor favorita?")
 let corFavorita2 = prompt("qual a sua segunda cor favorita?")
 let corFavorita3 = prompt("qual a sua terceira cor favorita?")
 todasAsCores.push(corFavorita1,corFavorita2, corFavorita3);
 console.log (todasAsCores)
}
imprimeTresCoresFavoritas ()

  // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   string = prompt("digite uma palavra")
  console.log (string.toUpperCase()) 
}  retornaStringEmMaiuscula ()
 
 // EXERCÍCIO 07
 function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
 return custo / valorIngresso
 }
 
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   // imple(mente sua lógica aqui
return (string1 === string2)
 }
 checaStringsMesmoTamanho ()
 
 
   // EXERCÍCIO 09
   function retornaPrimeiroElemento(array) {
       // implemente sua lógica aqui
   const listaNumesros= [ 1, 2, 3, 4, 5]
   console.log (listaNumesros[0])
     }
     retornaPrimeiroElemento ()
 
 // EXERCÍCIO 10
 function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const listaNumesros= [ 1, 2, 3, 4, 5]
   console.log (listaNumesros[4])
 } 
 retornaUltimoElemento ()
 
 
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
  const listaAnimais = [gato, raposa, coruja]
  console.log (frustas.shift)
  }
  trocaPrimeiroEUltimo ()
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    return (string1 === string2)
 }
 
 // EXERCÍCIO 13
 function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const anoAtual = Number(prompt("Qual ano atual?"))
   const anoDoNUsuario = Number(prompt("qual teu ano de nascimento?"))
   const anoDaID = Number(prompt("qual ano em que sua carteira de identidade foi emitida?"))
  
 }
 
 // EXERCÍCIO 14
 function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
 
 }
 
 // EXERCÍCIO 15
 function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
 
 }





// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



//nao encontrato.

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length();
   return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}