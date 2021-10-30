import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-emp-new-reg',
  templateUrl: './emp-new-reg.component.html',
  styleUrls: ['./emp-new-reg.component.css']
})
export class EmpNewRegComponent implements OnInit {

  
  imageWidth:number=50;
  imageMargin:number=2;
  employer!:DetailsModel[];
 
  employerItems={
    register:'',
    name:'',
    email:'',
      info:'',
    status:'',
      image:'',
    imgfile:''
      
}

  i: any;


  constructor(private jobportalservice:JobportalService, private router:Router) { }
title:String="Employer details";
  ngOnInit(): void {
    this.jobportalservice.getEmployerdetails()
    .subscribe((data: any)=>{
      this.employer=JSON.parse(JSON.stringify(data))
      console.log(this.employer)
    })
  }

viewemployer(i:any){

  localStorage.setItem("eachemployerId", i._id.toString())
  this.router.navigate(['detailveriemployer']);
}
}
