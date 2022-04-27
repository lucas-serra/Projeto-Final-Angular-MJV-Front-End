import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionarioSubject = new BehaviorSubject<Funcionario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const funcionario = jwt_decode(token) as Funcionario;

    this.funcionarioSubject.next(funcionario);
  }
  retornaFuncionario(){
    return this.funcionarioSubject.asObservable();
  }
  salvaToken(token:string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.funcionarioSubject.next({});
  }

  estaLogado(){
    this.tokenService.possuiToken();
  }
}
