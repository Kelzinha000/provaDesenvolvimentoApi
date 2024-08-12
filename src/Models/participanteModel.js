import { response } from "express";
import conn from "../Config/conn.js";

const tablePartcipante = /*sql*/`
CREATE TABLE IF NOT EXISTS participante(
participante_id VARCHAR(60) NOT NULL, 
nome VARCHAR (255)NOT NULL
);
`

conn.query(tablePartcipante, (err)=>{
   if(err){
    console.log('erro ao criar tabela'+err.stack)
   }
   console.log('Tabela PARTICIPANTES criada com sucesso!')
})