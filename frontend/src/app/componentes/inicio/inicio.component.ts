import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService,Extrato } from './../../servicos/extrato.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ListarExtrato: Extrato[]
  extrato: Extrato = {
    nomeCliente:'',
    valor:0,
    contaCorrente:''
  }

  constructor(private ExtratoService : ExtratoService, private router : Router) {
     this.ListarExtrato=[]
  }

  ngOnInit(): void {
    this.listarExtrato();
  }

  listarExtrato(){
    this.ExtratoService.getExtrato().subscribe({
      next:(resultado) => {console.log(resultado)
      this.ListarExtrato = <any>resultado},
      error:(e)=> console.error(e),
      complete:()=> console.info('complete')
    })
  }

  excluir(id:any){
    this.ExtratoService.deleteExtrato(id).subscribe({
      next:(resultado)=>{console.log("Registro excluído")
      this.listarExtrato()},
      error:(erro)=>{console.log(erro)},
    complete:()=> console.info("Processo de exclusão completado")
    })
  }

  editar(id:any){
    this.router.navigate(['edit/' + id])
  }

  adicionar(){
    this.ExtratoService.addExtrato(this.extrato).subscribe({
      next:(resultado) => console.log("Registro cadastrado com sucesso"),
      error:(erro)=> console.error(erro),
      complete:()=>console.info('complete')
    })
    this.router.navigate(['/inicio'])
  }
}
