import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { AuthGuard } from '../auth.guard';
import { JobportalService } from '../jobportal.service';
import { appliedModel } from './description.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  applied:appliedModel[]=[];
  constructor(public jobportalservice:JobportalService, private router:Router,public auth:AuthGuard,public admin:AdminGuard) { }
  jobItem={
    companyName:'',
    jobTitle:'',
    registeredEmail:'',
     startDate:'',
     endDate:'',
     qlfnItem:'',
     experience:'',
     passItem:'',
     infor:'',
     skillItem:'',
     companyinfor:''


}

  ngOnInit(): void {
    let jobId=localStorage.getItem("jobId");
    this.jobportalservice.getindvjobpage(jobId)
    .subscribe((data)=>{
      this.jobItem=JSON.parse(JSON.stringify(data))
      console.log(this.jobItem)
    })
    
this.jobportalservice.getappliedjob(jobId)
.subscribe((data)=>{
  this.applied=JSON.parse(JSON.stringify(data))
  console.log(this.applied)
})


  }
  verifyapplied(apply:any){
   let applyID= localStorage.setItem("appliedId", apply._id.toString())
   console.log(applyID)

    this.router.navigate(['verifyform']);
    
 }
  }

