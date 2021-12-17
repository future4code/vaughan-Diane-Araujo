// exercicio 1
//1.a
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomepet = pets.map((pets, indice, array) => {
    return pets.nome
   })

   //1.b

   const petSalsicha = pets.filter((pets, indice, array) => {
    return pets.raca === "Salsicha"
   })
//1.c
const descontoPoodle = pets.filter((pets, indice, array) => {
    if (pets.raca === "Pooldle"){

    console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a", $[nome], "!" )
}
    return pets.raca === "Poodle"
})