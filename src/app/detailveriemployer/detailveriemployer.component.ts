import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-detailveriemployer',
  templateUrl: './detailveriemployer.component.html',
  styleUrls: ['./detailveriemployer.component.css']
})
export class DetailveriemployerComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router, private http:HttpClient) { }
  clicked:boolean=false;
  employerItems={
    register:'',
    name:'',
    email:'',
    phonenumber:'',
      info:'',
    status:'',
      image:'',
    imgfile:''
      
}
employer!:DetailsModel[];
 
imageUrl:any=undefined;
// selectedFile:File=null;
imagefile:any;
image:string='';

onFileSelected(event:any){
if(event.target.files){

  var reader=new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload=(event:any)=>{
  this.imageUrl=reader.result;
  
  }
this.imagefile=<File>event.target.files[0];
  }


this.image=this.imagefile.name;


  }

  ngOnInit(): void {
    let employerId=localStorage.getItem("eachemployerId");
    this.jobportalservice.getindvemplreq(employerId)
    .subscribe((data)=>{
      this.employerItems=JSON.parse(JSON.stringify(data))
    })
    
    this.jobportalservice.getstatusempl(employerId)
    .subscribe( 
      (res:any)=>{
      alert("Status is confirmed")
      this.clicked=!this.clicked
    
     },
     (err:any)=>{
      alert('Status is pending')
      
     
    }
   
)



  }
 

  deleteEmployer(alum:any)
  {
    this.jobportalservice.deleteEmployer(alum._id)
      .subscribe((data:any) => {
        this.router.navigate (["empNewReg"])
         this.employer = this.employer.filter(p => p !== alum);
        
      })

}

    confirmemployer()
    {
       this.jobportalservice.confirmemployer(this.employerItems) .subscribe((data:any)=>{
       this.employerItems=JSON.parse(JSON.stringify(data));
       this.employerItems.image=this.image;
       this.employerItems.imgfile=this.imageUrl;
        console.log(this.employerItems)
       
      })
    
      alert("Successfully confirmed the status of "+this.employerItems.name)
      this.router.navigate(['empNewReg']);

}
}
