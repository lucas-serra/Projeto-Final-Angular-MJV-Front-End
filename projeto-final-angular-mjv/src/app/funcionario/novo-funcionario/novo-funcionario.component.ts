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
    private novoFuncionarioService: NovoFuncionarioService,
    private funcionarioExistenteService: FuncionarioExisteService,
    private router: Router) { }

  ngOnInit(): void {
    this.novoFuncionarioForm = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.minLength(10)]],
      profissao: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      cpf: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      celular: [ ,[Validators.required]],
      salario: ['',[Validators.required]],
      matricula: [ ,[Validators.required],[this.funcionarioExistenteService.funcionarioJaExiste()]]
    })
  }

  cadastrar(){
    if (this.novoFuncionarioForm.valid) {
      const novoFuncionario = this.novoFuncionarioForm.getRawValue() as NovoFuncionario;
      this.novoFuncionarioService.cadastraNovoFuncionario(novoFuncionario).subscribe(()=>{
        this.router.navigate([''])
      },
      (error)=>{
        console.log(error);
      }

      );
    }

  }

  textCenter :string = 'Cadastro de Funcionário';
}
