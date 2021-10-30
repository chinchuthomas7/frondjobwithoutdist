import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Customer={
    register:'',
    name:'',
    email:'',
    phonenumber:'',
    password:'',
  passwordcheck:'',
  status:'pending'
}
  constructor(private jobportalservice:JobportalService,private router:Router) { }

  // userItem=new UserModel(null,null,null,null,null)
  error:any;
  ngOnInit(): void {
  }
  AddUser(){
    
    this.jobportalservice.newUser(this.Customer)
   .subscribe(
     
     (res:any)=>{
      alert("Successfully saved the details")
    
     },
     (err:any)=>{
      alert('Already exist')
      
     
    }
   
)
}
}
