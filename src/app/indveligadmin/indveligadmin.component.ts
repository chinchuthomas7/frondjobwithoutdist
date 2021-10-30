import { Component, Inject, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-indveligadmin',
  templateUrl: './indveligadmin.component.html',
  styleUrls: ['./indveligadmin.component.css']
})
export class IndveligadminComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,@Inject(DOCUMENT) private document: Document) { }
  admineligItem={


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
    let eligtoadmId=localStorage.getItem("toadminId");
    this.jobportalservice.geteligibletoadmindvidual(eligtoadmId)
    .subscribe((data)=>{
      this.admineligItem=JSON.parse(JSON.stringify(data))
      console.log(this.admineligItem)
     
      console.log(this.admineligItem.resumefile)
    })
    
  }

  goToUrl(): void {
    this.document.location.href = this.admineligItem.onlinelink;
}

downloadfile(){
  // this.downloadPdf(this.admineligItem.resumefile.valueOf())

  var byteString = atob(this.admineligItem.resumefile.split(',')[1]);
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


}
