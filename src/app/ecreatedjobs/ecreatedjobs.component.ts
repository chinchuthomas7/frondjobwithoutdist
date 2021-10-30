import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';
import { JobpostModel } from '../jobpost/jobpostmodel';

@Component({
  selector: 'app-ecreatedjobs',
  templateUrl: './ecreatedjobs.component.html',
  styleUrls: ['./ecreatedjobs.component.css']
})
export class EcreatedjobsComponent implements OnInit {

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


  jobemployers !: JobpostModel[];

  


  ngOnInit(): void {
  
let employrmail=localStorage.getItem("loginmail");
console.log(employrmail);

this.jobportalservice.employerprofile(employrmail)
.subscribe((data)=>{
  this.employerItem=JSON.parse(JSON.stringify(data))
  console.log(this.employerItem)
})

this.jobportalservice.employercreatedjobs(employrmail)
.subscribe((data)=>{
  this.jobemployers=JSON.parse(JSON.stringify(data))
  console.log(this.jobemployers)
})
  }


  deleteJob(jobemployer:any)
  {
  
    this.jobportalservice.deleteJobemployer(jobemployer._id)
    
      .subscribe((data:any) => {
       
        this.jobemployers = this.jobemployers.filter(p => p !== jobemployer);
      })
    }






}
