require('./config/conexao')



const express = require('express')
const app = express()
const porta = 3000

const cors = require('cors');

app.use(cors());

// utilizar arquivo no formato json
app.use(express.json())

const extrato = require('./rotas')

app.use('/principal',extrato)

app.get('/teste', (req,res)=>{
    res.send('Está funcionando')
})

app.listen(porta,()=>{
    console.log('Servidor está rodando')
})
