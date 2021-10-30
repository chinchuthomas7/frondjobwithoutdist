import { Component, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { appliedModel } from './appliedjobs.model';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {

  applied:appliedModel[]=[];
  constructor(public jobportalservice:JobportalService) { }

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
    // this.jobportalservice.getapplied().subscribe((data)=>{
    //   this.applied=JSON.parse(JSON.stringify(data));
    // })

    let employrmail=localStorage.getItem("loginmail");
    console.log(employrmail);

    this.jobportalservice.alumniprofile(employrmail)
    .subscribe((data)=>{
      this.alumniItem=JSON.parse(JSON.stringify(data))
      console.log(this.alumniItem)
    })
    
    this.jobportalservice.getappliedtoalumni(employrmail)
    .subscribe((data)=>{
      this.applied=JSON.parse(JSON.stringify(data))
      console.log(this.applied)
    })
      }
    }




  



