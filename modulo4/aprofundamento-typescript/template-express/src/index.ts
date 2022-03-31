import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
//Exercício 1 
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})
//Exercício 2
type afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//Exercício 3
const arrayAfazeres: afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 3,
        id: 3,
        title: "fugiat veniam minus",
        completed: true
      },
]

//Exercício 4
app.get("statusAfazeres", (rec, res) => {
    const listaDeAfazeres = arrayAfazeres.map((osAfazeres)=> {
        return osAfazeres.completed
    }) 
    res.send(listaDeAfazeres)
})
