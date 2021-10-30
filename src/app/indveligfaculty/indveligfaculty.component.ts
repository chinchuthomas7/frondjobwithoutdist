import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-indveligfaculty',
  templateUrl: './indveligfaculty.component.html',
  styleUrls: ['./indveligfaculty.component.css']
})
export class IndveligfacultyComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,@Inject(DOCUMENT) private document: Document) { }
  faceligItem={


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
    let eligfacultyId=localStorage.getItem("tofacultyId");
    console.log(eligfacultyId)
    this.jobportalservice.geteligibletofacultydvidual(eligfacultyId)
    .subscribe((data)=>{
      this.faceligItem=JSON.parse(JSON.stringify(data))
      console.log(this.faceligItem)
      console.log(this.faceligItem.onlinelink)
      console.log(this.faceligItem.resumefile)
    })
    
  }


  downloadfile(){
    // this.downloadPdf(this.admineligItem.resumefile.valueOf())
  
    var byteString = atob(this.faceligItem.resumefile.split(',')[1]);
    console.log(byteString)
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ia], { type: 'application/pdf' });
    console.log(blob)
  var file = new File([blob], "resume.pdf");
  var url = URL.createObjectURL(blob);
  
  console.log(url)
  
  window.open(url)
  
  }
  




  goToUrl(): void {
    this.document.location.href = this.faceligItem.onlinelink;
}
}

 