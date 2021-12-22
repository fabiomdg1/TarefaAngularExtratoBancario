import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Extrato, ExtratoService } from './../../servicos/extrato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  extrato:Extrato={
    nomeCliente:'',
    valor:0,
    contaCorrente:''
  }


  constructor(private ExtratoService:ExtratoService, private router:Router) { }

  ngOnInit(): void {
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
