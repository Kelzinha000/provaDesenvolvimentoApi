import conn from "../Config/conn.js";
import {v4 as uuidv4} from 'uuid'


export const palestrantes =  (request, response)=>{
    const sql = /*sql*/`SELECT * FROM palestrantes `;
    conn.query(sql,(err,data)=>{
        if(err){
            response.status(500).json({message:"Erro ao buscar palestrantes"})
            return
        }
        const palestrantes = data 
        response.status(200).json(palestrantes); 
    });
}


export const criarPalestrantes = (request, response)=>{
   
    const {nome, area_especializacao} = request.body  
   
    if(!nome){ 
    response.status(400).json({message:"O nome é obrigatorio"})
    return
    } if(!area_especializacao){
    response.status(400).json({message:"O area especialização é obrigatorio"})
    return
    }

const checkSql = /*sql*/ `SELECT * FROM palestrantes WHERE ?? = ? AND ?? = ? AND ?? = ?`

const checkSqlData = ["nome", nome, "area_especializacao", area_especializacao]
conn.query(checkSql,checkSqlData, (err, data)=>{
    if(err){
    response.status(500).json({message:"Erro ao casdastar palestrante"})
    return console.log(err); 
    }
    
    if(data.length > 0){
    response.status(409).json({message: "palestrante já cadastrado"}); 
    return console.log(err); 
    }

    const id = uuidv4()
    const palestrante = data[0]

    const insertSql = /*sql*/ `INSERT INTO palestrantes
    (??, ??, ??) VALUES (?,?,?)` 

const insertData = ["palestrante_id", "nome", "area_especializacao", id, nome,area_especializacao ]

conn.query(insertSql,insertData, (err)=>{
    if(err){
    response.status(500).json({message:"Erro ao cadastrar palestrante"}); 
    }
    response.status(201).json({message:"palestrante cadastrado"})
})

console.log(palestrante)
}); 
}
