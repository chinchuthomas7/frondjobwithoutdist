import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  resumeUrl:any=undefined;
  // selectedFile:File=null;
  resumefile:any;
  resume:string='';
  
  onFileSelected(event:any){
  if(event.target.files){
  
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
    this.resumeUrl=reader.result;
    
    }
  this.resumefile=<File>event.target.files[0];
    }
  
  
  this.resume=this.resumefile.name;
  
  
    }
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
employee={

  jobtitle:this.jobItem.companyName,
  companyname:this.jobItem.jobTitle,
  startdate:this.jobItem.startDate,
  enddate:this.jobItem.endDate,
  companyemail:this.jobItem.registeredEmail,
  firstname:'',
  lastname:'',
  email:'',
  phone:'',
  gender:'',
  experience:'',
  resume:'',
  onlinelink:'',
  skillone:'',
  skilltwo:'',
  skillthree:'',
  skillfour:'',
  skillfive:'',
  skillsix:'',
  passout:'',
  qualifications:'',
  resumefile:''

}
  //applied:appliedModel[]=[];
  constructor( public jobportalservice:JobportalService, private router:Router) { }

  ngOnInit(): void {
    let jobId=localStorage.getItem("jobId");
    this.jobportalservice.getindvjobpage(jobId)
    .subscribe((data)=>{
      this.jobItem=JSON.parse(JSON.stringify(data))
      console.log(this.jobItem)

     
    // document.addEventListener('DOMContentLoaded', () =>{
       
      let currentdate=new Date()
      currentdate.setDate(currentdate.getDate()-1)
      console.log(currentdate)
      let iniline=currentdate.getTime()
      console.log(iniline)
      //let postdate=new Date(this.jobItem.startDate)
     // let posdate=postdate.getTime()
     // console.log(posdate)
      let finaldate=new Date(this.jobItem.endDate)
      console.log(finaldate)
      let deadline=finaldate.getTime()
      console.log(deadline)
      let milliseconds=deadline-iniline
      console.log(milliseconds)
      //   console.log(milliseconds)
      let submit = document.getElementById('submit');
      console.log(milliseconds)
      if (milliseconds > 0) {
        window.setTimeout(()=> {
          submit.style.display = 'none';
        }, milliseconds);
      }
      else {
        submit.style.display = 'none';
        alert("You can no longer apply for this post as it is closed")
      } 
    });
  
  }

  //liya
  applyVerify(){
    //alert("You have applied for this job!!")
    this.employee.resume=this.resume;
    this.employee.resumefile=this.resumeUrl;
    this.employee.jobtitle=this.jobItem.jobTitle
    this.employee.companyname=this.jobItem.companyName
    this.employee.startdate=this.jobItem.startDate
   

    this.employee.enddate=this.jobItem.endDate,
    this.employee.companyemail=this.jobItem.registeredEmail
    let regemail=localStorage.getItem("loginmail")
    console.log(regemail)
    if(this.employee.email===regemail  && this.employee.resume.split('.').pop()==="pdf"){
      this.jobportalservice.newApply(this.employee);
      console.log(this.employee);    
      alert("Success");
      this.router.navigate(['/home']);
    }
    else alert("Please enter your registered Email and upload Pdf file")
    }
    
}

    
  
  