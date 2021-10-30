import { Component, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User={
    register:'',
    email:'',
    password:'',
    status:'confirmed'
  }
  constructor(private jobportalservice:JobportalService,private router:Router) { }

  ngOnInit(): void {
   
  }
  loginUser(){
  console.log(this.User.email)
  localStorage.setItem("loginmail",this.User.email.toString())
  // let employrmail=localStorage.getItem("loginmail");
  // console.log(employrmail)
  
    this.jobportalservice.loginUser(this.User)
    .subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token)
        if(res.role=='Alumni'){
          localStorage.setItem('getAlumni',res.role)
        }
        if(res.role=='Faculty'){
          localStorage.setItem('getFaculty',res.role)
        }
        if(res.role=='Employer'){
          localStorage.setItem('getEmployer',res.role)
        }
        if(res.role=='admin'){
          localStorage.setItem('getAdmin',res.role)
        }

        alert('Successfully logged in');
        this.router.navigate(['']);
      },
      (err:any)=>{
        alert("Credentials are not proper or You have to wait until you get intimation from Placement cell")
      }
    )
      
    }
  }



