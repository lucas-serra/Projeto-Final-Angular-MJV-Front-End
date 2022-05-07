import { Component, OnInit } from '@angular/core';
import { NovoFuncionarioService } from '../novo-funcionario/novo-funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  users:any;
  constructor(private novoFuncionario:NovoFuncionarioService) { }

  ngOnInit(): void {

    this.users=this.novoFuncionario.listaFuncionarios();

  }

}
