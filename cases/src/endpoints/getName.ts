import { Request, Response } from "express"
import { connection } from "../connection"

// Esse arquivo seria o index.ts

export const getNameP = async (Name: String): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM pokemon_go WHERE Name = '${Name}'
  `)

	return result[0][0]
}
