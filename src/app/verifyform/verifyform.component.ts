import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appliedModel } from '../appliedjobs/appliedjobs.model';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-verifyform',
  templateUrl: './verifyform.component.html',
  styleUrls: ['./verifyform.component.css']
})
export class VerifyformComponent implements OnInit {
file:any;
clicked:boolean=false;
employee={
  jobtitle:'',
  companyname:'',
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
// resumeUrl:any=undefined;
// // selectedFile:File=null;
// resumefile:any;
// resume:string='';

// onFileSelected(event:any){
// if(event.target.files){

//   var reader=new FileReader();
//   reader.readAsDataURL(event.target.files[0]);
//   reader.onload=(event:any)=>{
//   this.resumeUrl=reader.result;
  
//   }
// this.resumefile=<File>event.target.files[0];
//   }


// this.resume=this.resumefile.name;


//   }
  constructor( public jobportalservice:JobportalService, private router:Router) { }
  ngOnInit(): void {
    let applyId=localStorage.getItem("appliedId");
    console.log(applyId)
    this.jobportalservice.getverifysubmission(applyId)
    .subscribe((data)=>{
      this.employee=JSON.parse(JSON.stringify(data))
     
    })


    this.jobportalservice.getstatusverif(applyId)
    .subscribe( 
      (res:any)=>{
      alert("Verfied and forwarded the Candidate details")
      this.clicked=!this.clicked;
      
    
     },
     (err:any)=>{
      alert('Candidate details have not yet verifed')
      
     
    }
   
)









  }
    
    
 
 applyVerify(){
  let applyId=localStorage.getItem("appliedId");
  this.jobportalservice.forwardeligible(this.employee)
  .subscribe((data)=>{
    this.employee=JSON.parse(JSON.stringify(data))
  console.log(this.employee)
      this.router.navigate (["indvpage"])
       
  })
 }

}












// ------------------------base64 to pdf trial--------------------

      // let encodedString=this.employee.resumefile.replace('data:application/pdf;base64,','')
      // let resumedata=atob(encodedString);
      // let blob=new Blob([resumedata],{'type':'pdf'})
     // let file = new File(blob,"resume.pdf",{type:"optional mime type"});
    // console.log(blob)
      


// ------------------------base64 to pdf trial--------------------

//     var byteString = atob(this.employee.resumefile.split(',')[1]);
//     console.log(byteString)
//     var ab = new ArrayBuffer(byteString.length);
//     var ia = new Uint8Array(ab);
//     for (var i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }
//     var blob = new Blob([ia], { type: 'application/pdf' });
//     console.log(blob)
// var file = new File([blob], "resume.pdf");

// console.log(file)
// this.employee.files=this.file

// console.log(this.employee.files)

   

