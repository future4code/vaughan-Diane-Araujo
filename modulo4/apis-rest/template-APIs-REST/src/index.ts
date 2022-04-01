import * as express from 'express'
import * as cors from 'cors'
import { type } from 'os'

// criando um servidor 
const app = express()
app.use(express.json())
app.use(cors())

// local onde o servidor vai abrir (porta do servidor)
app.listen(3003, () => {
    console.log("servidor")
})


//primeira requisição
app.get("/", (req, res) => { //get é uma requisição q vai pegar uma informação     
    res.send("Hello from Express")
})
//ex1
type dadosDaLista = {

    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let arrayUsers: dadosDaLista[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]/* 
app.get("/listas", (req, res) => {
    const aLista = arrayUsers.map((lista) => {
        return lista
    })
    res.send(aLista)
}) */

//ex 2
app.get("/filtrolistas", (req, res) => {
    // const alista = arrayUsers.find((lista) => {
    const alista = arrayUsers.map((lista) => {
        return lista.type
    })
    res.send(alista)
})
//ex3
app.get("/filtronome", (req,res) => {
    const nome = req.query.name as string //o nome pega o valor do query, ele pega o valor q coloca no postman (armazena o valor do usuario )
    let user: dadosDaLista  = arrayUsers.find((lista)=> lista.name === nome) //find pega um elemento do objeto 
   res.send(user)
})
