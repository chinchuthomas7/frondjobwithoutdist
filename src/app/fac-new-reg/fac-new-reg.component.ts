import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-fac-new-reg',
  templateUrl: './fac-new-reg.component.html',
  styleUrls: ['./fac-new-reg.component.css']
})
export class FacNewRegComponent implements OnInit {

  

  imageWidth:number=50;
  imageMargin:number=2;
  faculty!:DetailsModel[];
 
  facultyItems={
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
title:String="Faculty details";
  ngOnInit(): void {
    this.jobportalservice.getFacultydetails()
    .subscribe((data: any)=>{
      this.faculty=JSON.parse(JSON.stringify(data))
      console.log(this.faculty)
    })
  }

viewfaculty(i:any){

  localStorage.setItem("eachfacultyId", i._id.toString())
  this.router.navigate(['detailverifaculty']);
}
}
