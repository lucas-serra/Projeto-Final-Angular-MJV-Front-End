import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoFuncionarioService } from './novo-funcionario.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioExisteService {

  constructor(private novoFuncionarioService: NovoFuncionarioService) { }

  funcionarioJaExiste(){
    return (control: AbstractControl) =>{
      return control.valueChanges.pipe(
        switchMap((matricula)=> this.novoFuncionarioService.verificaFuncionarioExistente(matricula))
      ),
      map((funcionarioExiste)=>(funcionarioExiste? {funcionarioExistente: true} : null)),
      first()
    }
  }
}
