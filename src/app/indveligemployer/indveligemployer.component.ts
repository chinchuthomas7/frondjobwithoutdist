import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-indveligemployer',
  templateUrl: './indveligemployer.component.html',
  styleUrls: ['./indveligemployer.component.css']
})
export class IndveligemployerComponent implements OnInit {

  constructor(private jobportalservice:JobportalService,@Inject(DOCUMENT) private document: Document) { }
  empeligItem={


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
    let eligtoemplId=localStorage.getItem("toaemployerId");
    this.jobportalservice.geteligibletoemployerdvidual(eligtoemplId)
    .subscribe((data:any)=>{
      this.empeligItem=JSON.parse(JSON.stringify(data))
      console.log(this.empeligItem)
      console.log(this.empeligItem.onlinelink)
      console.log(this.empeligItem.resumefile)

   
    })

  }

  downloadfile(){
    // this.downloadPdf(this.admineligItem.resumefile.valueOf())
  
    var byteString = atob(this.empeligItem.resumefile.split(',')[1]);
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
    this.document.location.href = this.empeligItem.onlinelink;
}

}
