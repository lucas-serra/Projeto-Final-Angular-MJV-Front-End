import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/autenticacao/funcionario/funcionario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  funcionario$ = this.funcionarioService.retornaFuncionario()
  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  logout(){
    this.funcionarioService.logout();
    this.router.navigate(['']);
  }
}
