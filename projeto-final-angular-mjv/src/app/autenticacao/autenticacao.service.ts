import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { FuncionarioService } from './funcionario/funcionario.service';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private funcionarioService: FuncionarioService) { }

  autenticar(userEmail: string , password: string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/user/login',{
      email: userEmail,
      senha: password
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
