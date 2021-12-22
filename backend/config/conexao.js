const mysql = require('mysql')
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'db_extratobancario'
});

//Criamos ma arrow function esperando erro
conexao.connect((erro)=>{
    if(erro) throw erro
    console.log('Estamos conectados ao banco')
})

module.exports = conexao