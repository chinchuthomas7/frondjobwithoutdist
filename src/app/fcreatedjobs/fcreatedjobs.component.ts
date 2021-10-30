import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';
import { JobpostModel } from '../jobpost/jobpostmodel';

@Component({
  selector: 'app-fcreatedjobs',
  templateUrl: './fcreatedjobs.component.html',
  styleUrls: ['./fcreatedjobs.component.css']
})
export class FcreatedjobsComponent implements OnInit {

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


  jobemployers !: JobpostModel[];


  ngOnInit(): void {
  
let employrmail=localStorage.getItem("loginmail");
console.log(employrmail);

this.jobportalservice.facultyprofile(employrmail)
.subscribe((data)=>{
  this.facultyItem=JSON.parse(JSON.stringify(data))
  console.log(this.facultyItem)
})

this.jobportalservice.facultycreatedjobs(employrmail)
.subscribe((data)=>{
  this.jobemployers=JSON.parse(JSON.stringify(data))
  console.log(this.jobemployers)
})

  }

  deleteJob(jobemployer:any)
  {
  
    this.jobportalservice.deleteJobfaculty(jobemployer._id)
    
      .subscribe((data:any) => {
       
        this.jobemployers = this.jobemployers.filter(p => p !== jobemployer);
      })
    }



}
