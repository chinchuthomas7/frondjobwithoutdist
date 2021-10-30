import { Component, OnInit  } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eeligiblesubmissions',
  templateUrl: './eeligiblesubmissions.component.html',
  styleUrls: ['./eeligiblesubmissions.component.css']
})
export class EeligiblesubmissionsComponent implements OnInit {

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
    
    this.jobportalservice.geteligibletoemployer(employrmail)
    .subscribe((data)=>{
      this.eligibleItems=JSON.parse(JSON.stringify(data))
      console.log(this.eligibleItems)
    })

    this.jobportalservice.employerprofile(employrmail)
.subscribe((data)=>{
  this.employerItem=JSON.parse(JSON.stringify(data))
  console.log(this.employerItem)
})

}

viewEligible(eligibletoempl:any){
localStorage.setItem("toaemployerId", eligibletoempl._id.toString())
this.router.navigate(['indveligbemployer'])
}

}