import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovoFuncionario } from '../novo-funcionario/novo-funcionario';
import { FuncionariosService, NovoFuncionarioService } from '../novo-funcionario/novo-funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  users: Array<NovoFuncionario> = new Array();
  usuario: NovoFuncionario = new NovoFuncionario();
  constructor(private novoFuncionario:FuncionariosService, private router: Router) {   this.getAll }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.novoFuncionario.listaFuncionarios().subscribe(resp => {
      this.users = resp;
    }, (error): void => {
      console.log(error)
    })
  }

  rota() {
    this.router.navigate(['funcionarios/novo-funcionario']);
  }

  remover(id:string){

    this.novoFuncionario.removeFuncionario(id).subscribe(resp=>{
      this.usuario = resp;
      return this.getAll();
    }, (error): void=>{
      console.log(error)
    });
  }
}
