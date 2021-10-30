import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-detailverialumni',
  templateUrl: './detailverialumni.component.html',
  styleUrls: ['./detailverialumni.component.css']
})
export class DetailverialumniComponent implements OnInit {
  
  constructor(private jobportalservice:JobportalService,private router:Router, private http:HttpClient) { }
  clicked:boolean=false;
  alumniItems={
    register:'',
    name:'',
    phonenumber:'',
    email:'',
      info:'',
    status:'',
      image:'',
    imgfile:''
      
}
alumni!:DetailsModel[];
 
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
    let alumniId=localStorage.getItem("eachalumniId");
    this.jobportalservice.getindvalumreq(alumniId)
    .subscribe((data)=>{
      this.alumniItems=JSON.parse(JSON.stringify(data))
    })
    
    this.jobportalservice.getstatusalum(alumniId)
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
 


  deleteAlumni(alum:any)
  {
    this.jobportalservice.deleteAlumni(alum._id)
      .subscribe((data:any) => {
        this.router.navigate (["alumniNewReg"])
         this.alumni = this.alumni.filter(p => p !== alum);
      })

}

    confirmalumni()
    {
       this.jobportalservice.confirmalumni(this.alumniItems) 
       .subscribe((data:any)=>{
       this.alumniItems=JSON.parse(JSON.stringify(data));
       this.alumniItems.image=this.image;
       this.alumniItems.imgfile=this.imageUrl;
        console.log(this.alumniItems)
        
       
      })
    
      alert("Successfully confirmed the status of "+ this.alumniItems.name)
 this.router.navigate(['alumniNewReg']);
}
}
