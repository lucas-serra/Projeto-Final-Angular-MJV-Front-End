import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../componentes/header/header.module';
import { HeaderComponent } from '../componentes/header/header.component';



@NgModule({
  declarations: [
    ListaFuncionarioComponent,
    NovoFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    MensagemModule
  ]
})
export class FuncionarioModule { }
