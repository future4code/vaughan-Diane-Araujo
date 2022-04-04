//exercicio1

const nome = prompt ("qual teu nome?")
const idade = Number.prompt ("qual tua idade?")
if (idade) {(idade <= 18) 
console.log ("habilitado para dirigir")
}
else {(idade >17) 
    console.log ("idade insuficiente para dirigir")
}

// exercicio2
const Horarioaula= prompt ("Teu horario de estudo? é matutino, vespertino ou noturno?").toLowerCase

function Horarioaula (){
   switch(horarioaula) {
      case 'matutino':
         console.log('Bom dia')
         break
      case 'vespertino':
         console.log('Boa tarde')
         break
      case 'Noturno':
         console.log('Boa noite')

      default:
         console.log('escolha uma das 3 opçoes disponiveis por favor')
   }
}

//exercicio3
const Horarioaula= prompt ("Teu horario de estudo? é matutino, vespertino ou noturno?").toLowerCase
// exercicio 2 ja estava em switch case
function Horarioaula (){
   switch(horarioaula) {
      case 'matutino':
         console.log('Bom dia')
         break
      case 'vespertino':
         console.log('Boa tarde')
         break
      case 'Noturno':
         console.log('Boa noite')
        break
      default:
         console.log('escolha uma das 3 opçoes disponiveis por favor')
         break
   }
}

//exercicio4

const genero = fantasia 
 const preco = 15
 const filme = prompt ("qual é filme e o genero do filme que voce quer assistir?")
 const precoMaior = Number.prompt ("qual e o valor do filme?")

 function verificacao (genero, preco, filme, precoMaior) {
    if (genero === filme, precoMaior === preco ) {
        console.log("Bom filme!")
    } else 
    { (genero === filme, precoMaior !== preco)
        console.log("Escolha outro filme :(")
    }
}
 verificacao (genero, preco, filme, precoMaior)