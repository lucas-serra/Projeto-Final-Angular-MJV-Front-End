import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioExisteService } from './funcionario-existe.service';
import { NovoFuncionario } from './novo-funcionario';
import { NovoFuncionarioService } from './novo-funcionario.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

  novoFuncionarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoFuncionarioService: NovoFuncionarioService<any>,
    private router: Router,
    private funcionarioExistenteService: FuncionarioExisteService) { }

  ngOnInit(): void {
    this.novoFuncionarioForm = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.minLength(10)]],
      profissao: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required]],
      salario: ['',[Validators.required]],
      matricula: [ null,[Validators.required, this.funcionarioExistenteService.funcionarioJaExiste()]]
    })
  }

  cadastrar(){
    console.log(this.novoFuncionarioForm)
    if (this.novoFuncionarioForm.valid) {
      const novoFuncionario = this.novoFuncionarioForm.getRawValue() as NovoFuncionario;
      this.novoFuncionarioService.cadastraNovoFuncionario(novoFuncionario).subscribe(()=>{

      },
      (error: any)=>{
        console.log(error);
      }

      );
    }

  }

  rotaLista(){
    this.router.navigate(['funcionarios']);
  }

  textCenter :string = 'Cadastro de Funcionário';
}
