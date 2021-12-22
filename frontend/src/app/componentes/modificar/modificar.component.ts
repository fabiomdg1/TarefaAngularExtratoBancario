import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Extrato, ExtratoService } from './../../servicos/extrato.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  extrato:Extrato={
    nomeCliente:'',
    valor: 0,
    contaCorrente:''
  }

  constructor(private ExtratoService:ExtratoService,
              private router:Router,
              private ActivatedRoute:ActivatedRoute) {

               }

  ngOnInit(): void {
    const id_entrada = <any>this.ActivatedRoute.snapshot.params['id']
    console.log('id de entrada: ' + id_entrada)
    this.ExtratoService.getUmaExtrato(id_entrada).subscribe({
      next:(resultado) => {console.log(resultado)
                        this.extrato = resultado},
      error:(erro) => console.error(erro),
      complete: ()=> console.info('Registro')
      })
  }

  modificar(){
    this.ExtratoService.editExtrato(this.extrato.id_transferencia, this.extrato).subscribe({
      next: (resultado) => console.log('Registro atualizado com sucesso'),
      error:(erro) => console.error(erro),
      complete: () => console.info ('Edição completada com sucesso')
    })
    this.router.navigate(['/inicio'])  }
}
