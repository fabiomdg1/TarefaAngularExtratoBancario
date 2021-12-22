import { Injectable } from '@angular/core';


//Importando a biblioteca http para possibilitar realizar os serviços http
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  //Referencia ao banco de dados
  //Todas as rotinas realizadas no backend(post, put, get e delete)
  url = 'http://localhost:3000/principal';

  constructor(private http: HttpClient) { }

  //listar todas as tarefas que estão armazenadas no banco de dados
  getExtrato(){
    return this.http.get(this.url)
  }

  //get para uma tarefa
  getUmaExtrato(id:any){
    return this.http.get(this.url + '/' + id)
  }

  // Adicionar uma nova tarefa
  addExtrato(extrato:Extrato){
    return this.http.post(this.url, extrato)
  }

  // Excluir tarefa
  deleteExtrato(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  // Modificar uma tarefa
  editExtrato(id:any, extrato:Extrato){
    return this.http.put(this.url + '/' + id, extrato)
  }
}

export interface Extrato{
  id_transferencia?:number
  nomeCliente?:string
  valor?:number
  contaCorrente?:string
}
