import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employ-registration',
  standalone: true,
  imports: [HttpClientModule, CommonModule , FormsModule],
  templateUrl: './employ-registration.component.html',
  styleUrl: './employ-registration.component.css'
})
export class EmployRegistrationComponent implements OnInit {

  department: any[] = [];
  getEmployees: any[] = [];
  isListView: boolean = true;

  employeeObj : any ={
            "firstName":"",
            "lastName":"",
            "departmentId":"",
            // "department":"",
            "gender":"",
            "email":"",
            "phoneNo":""
  }

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();

  }

  loadDepartments() {
    this.http.get("assets/department.json").subscribe((res: any) => {
      // debugger;
      this.department = res.data;
    })
  }

  loadEmployees() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {
      // debugger;
      this.getEmployees = res.data;
    })

  }

  onCreateEmployee(){
    debugger;
    this.http.post("assets/postEmployee.json",this.employeeObj).subscribe((res: any)=>{
     
      alert(res.message);
      this.loadEmployees();
    })
  }

  onEdit(item:any){
    this.employeeObj = item;
    this.isListView = false;
  }

  onDelete(item:any){
    this.http.delete("assets/deleteEmployee.json").subscribe((res: any)=>{
      alert(res.message);
      this.loadEmployees();
    })
  }
}
