import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router) { }
  
  alumniItem={
  
  
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
  
  this.jobportalservice.alumniprofile(employrmail)
  .subscribe((data)=>{
    this.alumniItem=JSON.parse(JSON.stringify(data))
    console.log(this.alumniItem)
  })
    }
  }
  