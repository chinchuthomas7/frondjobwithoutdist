import { Component, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feligiblesubmissions',
  templateUrl: './feligiblesubmissions.component.html',
  styleUrls: ['./feligiblesubmissions.component.css']
})
export class FeligiblesubmissionsComponent implements OnInit {

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



  eligibleItems={


    jobtitle:'',
    companyname:'',
    enddate:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    gender:'',
    experience:'',
    resume:'',
    resumefile:'',
    onlinelink:'',
    skillone:'',
    skilltwo:'',
    skillthree:'',
    skillfour:'',
    skillfive:'',
    skillsix:'',
    passout:'',
    qualifications:''
      
  }
  ngOnInit(): void {
    let employrmail=localStorage.getItem("loginmail");
    console.log(employrmail);

    this.jobportalservice.facultyprofile(employrmail)
.subscribe((data)=>{
  this.facultyItem=JSON.parse(JSON.stringify(data))
  console.log(this.facultyItem)
})
    
    this.jobportalservice.geteligibletofaculty(employrmail)
    .subscribe((data)=>{
      this.eligibleItems=JSON.parse(JSON.stringify(data))
      console.log(this.eligibleItems)
    })
}

viewEligible(eligibletofacul:any){
  localStorage.setItem("tofacultyId", eligibletofacul._id.toString())
  this.router.navigate(['indveligbfaculty'])
  }

}