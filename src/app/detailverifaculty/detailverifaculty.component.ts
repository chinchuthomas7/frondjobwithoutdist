import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-detailverifaculty',
  templateUrl: './detailverifaculty.component.html',
  styleUrls: ['./detailverifaculty.component.css']
})
export class DetailverifacultyComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,private router:Router, private http:HttpClient) { }
  clicked:boolean=false;
  facultyItems={
    register:'',
    name:'',
    email:'',
    phonenumber:'',
      info:'',
    status:'',
      image:'',
    imgfile:''
      
}
faculty!:DetailsModel[];
 
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
    let facultyId=localStorage.getItem("eachfacultyId");
    this.jobportalservice.getindvfacreq(facultyId)
    .subscribe((data)=>{
      this.facultyItems=JSON.parse(JSON.stringify(data))
    })
    
    this.jobportalservice.getstatusfacu(facultyId)
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
  deleteFaculty(facu:any)
  {
    this.jobportalservice.deleteFaculty(facu._id)
      .subscribe((data:any) => {
        this.router.navigate (["facNewReg"])
         this.faculty = this.faculty.filter(p => p !== facu);
      })

}
    confirmfaculty()
    {
      this.clicked=!this.clicked;
       this.jobportalservice.confirmfaculty(this.facultyItems) .subscribe((data:any)=>{
       this.facultyItems=JSON.parse(JSON.stringify(data));
       this.facultyItems.image=this.image;
       this.facultyItems.imgfile=this.imageUrl;
        console.log(this.facultyItems)
        // this.router.navigate(['facNewReg']);
      })
    
      alert("Successfully confirmed the status of " +this.facultyItems.name)
      this.router.navigate(['facNewReg']);

}
}
