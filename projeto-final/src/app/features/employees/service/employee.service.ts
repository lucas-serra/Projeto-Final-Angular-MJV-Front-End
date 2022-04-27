import { Injectable } from '@angular/core';
import { employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Array<employee>=[
    {
      id:1,
      name:'Fábio Luiz Araújo',
      office: 'Back-end developer',
      salaryExpectation:3500,
      yearsExperience:1,
      email:'fabio123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    },
    {
      id:2,
      name:'José Felipe Souza',
      office: 'Front-end developer',
      salaryExpectation:6500,
      yearsExperience:3,
      email:'ze123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    },
    {
      id:3,
      name:'Carlos Eduardo dos Santos',
      office: 'Scrum Master',
      salaryExpectation:8000,
      yearsExperience:8,
      email:'edu123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    },
    {
      id:4,
      name:'Flávio Amaral',
      office: 'Full-stack developer',
      salaryExpectation:15000,
      yearsExperience:7,
      email:'flavio123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    },
    {
      id:5,
      name:'Jaqueline Maria de Oliveira',
      office: 'Analista de Dados',
      salaryExpectation:9000,
      yearsExperience:4,
      email:'jaque123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    },
    {
      id:6,
      name:'Maria Fernanda de Souza',
      office: 'Backend developer',
      salaryExpectation:3550,
      yearsExperience:1,
      email:'fernanda123@gmail.com',
      password:'12345',
      cell:'999988887',
      validRegistration: true
    }
  ]
  constructor() { }
  generateNextId(): number {
    return this.employees[(this.employees.length - 1)].id + 1;
  }

  getDefaultEmployee(){
    return{
      id:this.generateNextId(),
      name:'',
      office:'',
      salaryExpectation:0,
      yearsExperience:0,
      email:'',
      password:'',
      cell:'',
      validRegitration:true
    }
  }
  getEmployeeEmailAndPassword(email: string, password: string){
    return this.employees.find((employee)=> employee.password === password && employee.email===email)
  }
}
