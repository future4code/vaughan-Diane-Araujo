import express from 'express'
import cors from 'cors'
import { type } from 'os'

// criando um servidor 
const app = express()
app.use(express.json())
app.use(cors())

// local onde o servidor vai abrir (porta do servidor)
app.listen(3003, () => {
    console.log("servidor")
})

// ex1
//primeira requisição
app.get("/", (req, res) => { //get é uma requisição q vai pegar uma informação     
    res.send("Hello from Express")
})

// ex2 //criada uma variavel de tipo 
type dadosUsuario = {
    id: number
    name: string
    phone: number
    email: string
    website: string
}

//ex3 //criado obejtos dentro do array com tipo criado "dadosUsuario"
const arrayUsuarios: dadosUsuario[] = [{
    id: 55525,
    name: "ana",
    phone: 55566,
    email: "daisasa",
    website: "sasasa",
},
{
    id: 55525,
    name: "dani",
    phone: 5544445566,
    email: "soaksa",
    website: "sasadkspkdsa"
},
{
    id: 84646,
    name: "edu",
    phone: 445,
    email: "sasmla",
    website: "ewlmlw"
}]

//ex4 // nova requisição criada com mapeamento do array do exercicio anterior 
app.get("/usuarios", (req, res) => {
    const listaUsuarios = arrayUsuarios.map((usuario) => {
        return usuario

    })
    res.send(listaUsuarios)
})
// ex5 
type posts = {
    id: number,
    title: string
    body: string
    userId: number 
}
//ex6
const arrayPost: posts[] = [{
    id: 5515,
    title: "dsdsd",
    body: "dsdsds",
    userId: 151166 
},
{
    id: 54454,
    title: "dsjasdsd",
    body: "dssasdsds",
    userId: 15581166 
},
]//comentario: criei fora pq é mais facil para começar(separados é mais facil do q edita-los, para entendimento)

//ex7

app.get ("/posts", (req, res) => {
    const listaspost = arrayPost.map((post) => {
        return post
    })
    
    res.send(listaspost)
})
   

