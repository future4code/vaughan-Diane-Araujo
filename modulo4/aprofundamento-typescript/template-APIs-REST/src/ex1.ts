/* 1 - O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer 
um pouco desses critérios.
a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número
 a esta variável. O que acontece? */

 var minhaString : string = "valor"
/* 
 b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável
  também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor? */

  var meuNumero: number = 10;
  console.log(meuNumero);

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string; `idade`, que é um número; `corFavorita`, que é uma string.
Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** 
`Pessoa` para garantir que todos os objetos tenham os mesmos campos. */


function pessoa (nome: string, idade: number, corFavorita: string):{
    nome: "Ana",
    idade: 18,
    corFavorita: "preto"
}
