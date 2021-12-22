const rotas = require('express').Router()

const conexao = require('./config/conexao')

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

//Rota para listar os dados do database

rotas.get('/',(req,res)=>{
    let sql ='select * from tb_extrato'
    conexao.query(sql,(erro, rows, fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})

//Rota para mostrar apenas uma tarefa de acordo com o seu id
rotas.get('/:id',(req,res)=>{
    const {id} = req.params 
    let sql = 'select * from tb_extrato where id_transferencia = ?'
    conexao.query(sql,[id],(erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows[0])
    })    
})

//Rota para deletar uma tarefa específica (através do seu id)
rotas.delete('/:id',(req,res)=>{
    const{id} = req.params
    let sql = `delete from tb_extrato where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.send(rows)
    })    
})

//Rota para incluir
rotas.post('/',(req,res)=>{
    const {nomeCliente,valor,contaCorrente} = req.body
    let sql = `insert into tb_extrato(nomeCliente,valor,contaCorrente) values ('${nomeCliente}', '${valor}','${contaCorrente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if (erro) throw erro
        res.json({status:"Tarefa incluída com sucesso"})
    })
})

//Rota para atualizar
rotas.put('/:id',(req,res)=>{
    const {id} = req.params
    const {nomeCliente,valor,contaCorrente} = req.body
    let sql = `update tb_extrato set 
    nomeCliente = '${nomeCliente}',
    valor = '${valor}',
    contaCorrente = '${contaCorrente}'
    where id_transferencia = '${id}'`

    conexao.query(sql,(erro,rows,fields)=>{
        if (erro) throw erro
        res.json({status:"Atualização concluída com sucesso"})
    })
})





module.exports = rotas