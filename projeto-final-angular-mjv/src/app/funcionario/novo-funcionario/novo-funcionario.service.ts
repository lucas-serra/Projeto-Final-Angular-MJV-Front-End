import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoFuncionario } from './novo-funcionario';

@Injectable({
  providedIn: 'root'
})
export class NovoFuncionarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoFuncionario(novoFuncionario:NovoFuncionario){
    return this.http.post('http://localhost:3000/user/signup', novoFuncionario);
    //mudar para this.http.post('http://localhost:3000/funcionario/signup', novoFuncionario);
  }
  verificaFuncionarioExistente(matricula:string){
    return this.http.get(`http://localhost:3000/user/exists/${matricula}`);
  }
}
