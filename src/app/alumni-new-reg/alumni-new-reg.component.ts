import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';
import { SignupModel } from '../signup/signupmodel';
import { DetailsModel } from './detailsmodel';

@Component({
  selector: 'app-alumni-new-reg',
  templateUrl: './alumni-new-reg.component.html',
  styleUrls: ['./alumni-new-reg.component.css']
})
export class AlumniNewRegComponent implements OnInit {
clicked:boolean=false;

  imageWidth:number=50;
  imageMargin:number=2;
  alumni!:DetailsModel[];
 
  alumniItems={
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
title:String="Alumni details";
  ngOnInit(): void {
    this.jobportalservice.getAlumnidetails()
    .subscribe((data: any)=>{
      this.alumni=JSON.parse(JSON.stringify(data))
      console.log(this.alumni)
    })
  }

viewalumni(i:any){

  localStorage.setItem("eachalumniId", i._id.toString())
  this.router.navigate(['detailverialumni']);
}

  







     


}
  
