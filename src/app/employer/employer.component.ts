import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router) { }
  
employerItem={


  register:'',
  name:'',
  email:'',
    info:'',
  status:'',
    image:'',
  imgfile:''
    
}

  ngOnInit(): void {
  
let employrmail=localStorage.getItem("loginmail");
console.log(employrmail);

this.jobportalservice.employerprofile(employrmail)
.subscribe((data)=>{
  this.employerItem=JSON.parse(JSON.stringify(data))
  console.log(this.employerItem)
})
  }
}
