import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';
import { JobpostModel } from '../jobpost/jobpostmodel';
import { EmployerModel } from './employer-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs !: JobpostModel[];
 
  
  
  employer!:DetailsModel[];
 
  employerItems={
    register:'',
    name:'',
    email:'',
      info:'',
      image:'',
    imgfile:'',
    status:'confirmed'
      
}

  i: any;


  constructor(private jobportalservice:JobportalService, private router:Router,@Inject(DOCUMENT) private document:Document) { }
title:String="Employer details";
  ngOnInit(): void {
    this.jobportalservice.getEmployernameforhomepage(this.employerItems)
    .subscribe((data: any)=>{
      this.employer=JSON.parse(JSON.stringify(data))
      console.log(this.employer)
    })
    
   
    this.jobportalservice.getjobs().subscribe((data)=>{
      this.jobs =JSON.parse(JSON.stringify(data));
      console.log(this.jobs)
    })

   
      
   }

   getindvjobpage(job:any) {
    localStorage.setItem("jobId", job._id.toString())
    this.router.navigate(['indvpage']);
  }


  goFacebook():void{
    this.document.location.href='https://www.facebook.com/ictkerala'
  }
  goGoogle():void{
    this.document.location.href='https://ictkerala.org/'
  }

  goTwitter():void{
  this.document.location.href= 'https://twitter.com/ictakerala'
  }

  goInstagram():void{
  this.document.location.href="https://www.instagram.com/ictkerala/"
  }
}

  
