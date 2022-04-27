import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { FuncionarioService } from './funcionario/funcionario.service';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private funcionarioService: FuncionarioService) { }

  autenticar(email: string , senha: string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/user/login',{
      userEmail: email,
      password: senha
    },
    {observe:'response'}
    ).pipe(
      tap((response)=>{
        const authToken = response.headers.get('x-acess-token')?? '';
        this.funcionarioService.salvaToken(authToken);
      })
    )
  }
}
