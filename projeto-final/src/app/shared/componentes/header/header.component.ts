import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/features/employees/models/employee.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentEmployee?: employee;

  constructor(private router : Router) { }

  ngOnInit(): void {
    const employeeStorage = sessionStorage.getItem('currentStudent');
    if(employeeStorage) this.currentEmployee = JSON.parse(employeeStorage);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/login');
  }
}
