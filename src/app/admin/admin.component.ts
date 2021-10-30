import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';
import { JobpostModel } from '../jobpost/jobpostmodel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router) { }
  jobemployers !: JobpostModel[];


  ngOnInit(): void {
  
let employrmail=localStorage.getItem("loginmail");

console.log(employrmail);

this.jobportalservice.employercreatedjobs(employrmail)
.subscribe((data)=>{
  this.jobemployers=JSON.parse(JSON.stringify(data))
  console.log(this.jobemployers)
})

  }

deleteJob(jobemployer:any)
{

  this.jobportalservice.deleteJobadmin(jobemployer._id)
  
    .subscribe((data:any) => {
      this.router.navigate (["admin"])
      this.jobemployers = this.jobemployers.filter(p => p !== jobemployer);
    })
  }


}
