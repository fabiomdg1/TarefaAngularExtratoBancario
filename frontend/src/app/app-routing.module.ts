import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'edit/:id' ,component:ModificarComponent},
  {path:'add', component:CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
