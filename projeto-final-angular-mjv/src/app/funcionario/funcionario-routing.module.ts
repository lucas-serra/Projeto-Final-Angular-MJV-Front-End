import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';

const routes: Routes = [
  {
    path:'',
    component: ListaFuncionarioComponent,
    children:[
      {
        path:'lista-funcionario',
        component:ListaFuncionarioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
