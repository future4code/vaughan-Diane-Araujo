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
//raciocinio do pooble
// fazer map                                            ##FAZER E ENVIAR 

const filtrarYpe = produtos.filter(item => item.nome.includes("Ypê"))
const produtoValor = filtrarYpe.map((elementoYpe) => {
  return `Compre ${elementoYpe.nome} por  ${elementoYpe.preco}`
})
console.log(produtoValor)