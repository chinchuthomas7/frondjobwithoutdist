import { Component, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admineligiblesubmissions',
  templateUrl: './admineligiblesubmissions.component.html',
  styleUrls: ['./admineligiblesubmissions.component.css']
})
export class AdmineligiblesubmissionsComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router) { }
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
    
    this.jobportalservice.geteligibletoadmin(employrmail)
    .subscribe((data)=>{
      this.eligibleItems=JSON.parse(JSON.stringify(data))
      console.log(this.eligibleItems)
    })
}

viewEligible(eligibletoadmin:any){
  localStorage.setItem("toadminId",eligibletoadmin._id.toString())
  this.router.navigate(['indveligbadmin']);
}

}