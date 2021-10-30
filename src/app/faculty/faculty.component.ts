import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router) { }
  
facultyItem={


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

this.jobportalservice.facultyprofile(employrmail)
.subscribe((data)=>{
  this.facultyItem=JSON.parse(JSON.stringify(data))
  console.log(this.facultyItem)
})
  }
}
