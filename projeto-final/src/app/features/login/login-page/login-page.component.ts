import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employees/service/employee.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;
  email?: string;
  password?: string;

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgModel) {
    const employee = this.employeeService.getEmployeeEmailAndPassword(loginForm.value.email, loginForm.value.password);
    if(!employee) {
      return this.error = true;
    }
    this.router.navigateByUrl('employees');
    return sessionStorage.setItem('currentEmployee', JSON.stringify(employee));

  }

  authenticate() {
    const employee = this.employeeService.getEmployeeEmailAndPassword(this.email, this.password);
    if (!employee) {
      this.error = true;
    } else {
      delete employee.password;

      sessionStorage.setItem('employee', JSON.stringify(employee));

      this.router.navigateByUrl('employee');
    }

  }
}
