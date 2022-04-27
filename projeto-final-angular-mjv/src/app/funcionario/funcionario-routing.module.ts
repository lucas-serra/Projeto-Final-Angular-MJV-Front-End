import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component';

const routes: Routes = [
  {
    path:'',
    component: ListaFuncionarioComponent,
    children:[
      {
        path:'novoFuncionario',
        component:NovoFuncionarioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
