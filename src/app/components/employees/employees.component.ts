import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  wowName: string;
  employees: Employee[];

  constructor() {
    this.employees = [
      {id: 1, name: 'Javier', country: 'Argentina'},
      {id: 2, name: 'Violeta', country: 'Venezuela'},
      {id: 3, name: 'Taylor', country: 'USA'}
    ];
  }

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id == null) {
      this.selectedEmployee.id = this.employees.length + 1;
      this.employees.push(this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    this.selectedEmployee = new Employee();

  }

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  delete() {
    if (confirm('Are you sure do you want to delete this employee')){
      this.employees = this.employees.filter(item => item !== this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

  ngOnInit(): void {
  }

}
