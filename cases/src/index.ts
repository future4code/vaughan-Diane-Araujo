import express, {Express,Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { getNameP } from './endpoints/getName';
dotenv.config();




const app: Express = express();

app.use(express.json());
app.use(cors());

// estabelecer a conexão com o banco no index.ts:



app.get ("/nomespokemons",async (req:Request, res:Response) => {
   try {
      const name= req.body.name
      const namePokemon = await getNameP(name)
      res.send(namePokemon)
      
   } catch (error) {
      res.send(error)
   }
   
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});