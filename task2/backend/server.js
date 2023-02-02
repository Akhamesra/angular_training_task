const express = require("express");
const app = express();
const { Client } = require("pg");
const cors = require("cors")
const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
client.connect();

app.use(cors({
    origin:'*'
}))

app.get("/getData",(req,res)=>{
    client.query(`select empcode, name, email, designation from emp`,(err,data)=>{
        if(!err){
            res.send(data.rows);
        }
    })
})

app.listen(4000,()=>{
    console.log("Node running...")
})