import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail:string ='';
  password:string = '';

  constructor(private authService: AutenticacaoService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.userEmail,this.password).subscribe(()=>{
      this.router.navigate(['funcionarios']);
    },(error)=>{
      alert('Usuário ou senha incorreto');
      console.log(error);
    }
    );
  }

}
