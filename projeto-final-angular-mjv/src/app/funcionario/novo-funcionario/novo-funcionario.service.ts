import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/autenticacao/funcionario/funcionario';
import { NovoFuncionario } from './novo-funcionario';

@Injectable({
  providedIn: 'root'
})
export class NovoFuncionarioService<T> {

  constructor(private http: HttpClient) { }

  cadastraNovoFuncionario(novoFuncionario:NovoFuncionario){
    return this.http.post('http://localhost:3000/user/signup', novoFuncionario);
    //mudar para this.http.post('http://localhost:3000/funcionario/signup', novoFuncionario);
  }
  verificaFuncionarioExistente(matricula:string){
    return this.http.get(`http://localhost:3000/user/exists/${matricula}`);
  }
  listaFuncionarios(): Observable<T[]> {
    return this.http.get<T[]>(`http://localhost:3000/user/listarUser`);
  }
  // removeFuncionario(id:number){
  //   return this.http.delete(`http://localhost:3000/user/delete/:${id}`)
  // }
}

@Injectable({
  providedIn:'root'
})

export class FuncionariosService extends NovoFuncionarioService<Funcionario> {

constructor(http: HttpClient) {
  super(http);
}


}

export class NovocadastroFuncionarioService extends NovoFuncionarioService<NovoFuncionario> {

  constructor(http: HttpClient) {
    super(http);
  }

}
