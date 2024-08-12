import "dotenv/config";
import express, { request, response } from "express";

import conn from "./src/Config/conn.js";

import './src/Models/palestrantesModel.js'
import './src/Models/participanteModel.js'



const app = express()
const PORT = process.env.PORT

import palestranteRouter from './src/Routes/palestrantesRouter.js'

app.use("/", palestranteRouter)

app.listen(PORT, ()=>{
    console.log("Servidor on POT"+PORT)
})