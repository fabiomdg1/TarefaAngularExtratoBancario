// importando da biblioteca http as rotinas httpClientModule
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importanto a biblioteca forms que possibilita realizarmos rotinas com os formulários
import {FormsModule} from '@angular/forms';

import { ExtratoService } from './servicos/extrato.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastrarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
