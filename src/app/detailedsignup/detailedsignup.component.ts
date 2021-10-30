import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../alumni-new-reg/detailsmodel';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-detailedsignup',
  templateUrl: './detailedsignup.component.html',
  styleUrls: ['./detailedsignup.component.css']
})
export class DetailedsignupComponent implements OnInit {
  
  constructor(private jobportalservice:JobportalService,private router:Router, private http:HttpClient) { }
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
 
Client=new DetailsModel(null,null,null,null,null,null,null,null,null,null)

ngOnInit(): void {
}

AddDetail(){
this.Client.image=this.image;
this.Client.imgfile=this.imageUrl;
this.jobportalservice.newDetail(this.Client)
.subscribe(
  (res:any)=>{
    alert('Successfully saved the details')
    this.router.navigate (["login"])
  },
(err:any)=>{
  alert('Already exist')
}

)
}
}

