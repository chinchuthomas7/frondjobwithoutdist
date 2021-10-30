import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

 


  experience: Array<any>=[1,2,3,4,5,6,7,8,9,10,'fresher']
qualification:Array<String>=['MTech','BTech','MBA','BBA','MCA','BCA','Bsc','Msc','Bcom','Mcom']
skills:Array<String>=['Angular','HTML','CSS','Javascript','PHP','MySQl','Tableau','PowerBI','SCRUM','AGILE','Digital Marketing tools','Analytics tool','Social  media markieting','SEO','UX','SQL','NoSQL','R or Python statistical programming','AI','Machine learning']
passoutyear:Array<Number>=[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
selectedPassoutyearValues:any=[]
selectedQualificationValues:any=[]
selectedSkillValues:any=[]
favpassouterror:boolean=true;
favskillerror:boolean=true;
favqualificationerror:boolean=true;
  reactiveForm: FormGroup | undefined 
job={ 'compname':'','jbtitle':'','remail':'','stdate':'','nddate':'','qulfn': '[]', 'exp':'','passout':'','skill':'', 'info':'','companyinfo':''}
  
  constructor(private _fb:FormBuilder,private jobportalservice:JobportalService,private router:Router) { }
  
  ngOnInit(): void {
    
    this.reactiveForm=this._fb.group({
    companyName:[this.job.compname, Validators.required],
    jobTitle:[this.job.jbtitle, Validators.required],
    registeredEmail:[this.job.remail, [Validators.required,Validators.pattern("^[a-z0-9.%]+@[a-z0-9.-]+\.[a-z]{2,4}")]],
    startDate:[this.job.stdate,Validators.required],
    endDate:[this.job.nddate,Validators.required],
    favqualification:this.addQualificationControls(),
    experience:[this.job.exp,Validators.required],
    infor:[this.job.info,Validators.required],
    companyinfor:[this.job.companyinfo,Validators.required],
    favpassout:this.addPassoutyearControls(),
    favskill:this.addSkillControls()

  })

  
  }
  //  emailvalidation(){
  //   let logmail=localStorage.getItem("loginmail")
  //  if(this.job.remail===logmail){
  //    return this._fb.control(true)
  //  }
  //  else{return this._fb.control(false)}

  // }


addQualificationControls(){
  const arr=this.qualification.map(element=>{
    return this._fb.control(false)
  })
  return this._fb.array(arr);
}
addPassoutyearControls(){
  const arr=this.passoutyear.map(element=>{
    return this._fb.control(false)
  })
  return this._fb.array(arr);
}

addSkillControls(){
  const arr=this.skills.map(element=>{
    return this._fb.control(false)
  })
  return this._fb.array(arr);
}





  get companyname() {
    return this.reactiveForm.controls.companyName
  }

  get jobtitle() {
    return this.reactiveForm.controls.jobTitle
  }
  get email() {
    return this.reactiveForm.controls.registeredEmail
  }

  get postdate() {
    return this.reactiveForm.controls.startDate
  }
  get information() {
    return this.reactiveForm.controls.infor
  }
  get companyinformation() {
    return this.reactiveForm.controls.companyinfor
  }

  get enddate() {
    return this.reactiveForm.controls.endDate
  }
  get experienced() {
    return this.reactiveForm.controls.experience
  }

  get qualificationArray() {
    return <FormArray>this.reactiveForm.get('favqualification')
  }
  get passoutArray() {
    return <FormArray>this.reactiveForm.get('favpassout')
  }
  get skillArray() {
    return <FormArray>this.reactiveForm.get('favskill')
  }
 
checkfavqualificationcontroltouched(){
  let flg=false;
  this.qualificationArray.controls.forEach(control=>{
    if (control.touched){
      flg=true;
    }
  })
  return flg;
}
  getselectedQualificationValues(){
    this.selectedQualificationValues=[];
    this.qualificationArray.controls.forEach((control,i)=>{
      if (control.value){
        this.selectedQualificationValues.push(this.qualification[i])
      }
    })
    console.log(this.selectedQualificationValues)
    this.favqualificationerror=this.selectedQualificationValues.length > 0?false:true;
  }

  getselectedPassoutValues(){
    this.selectedPassoutyearValues=[];
    this.passoutArray.controls.forEach((control,i)=>{
      if (control.value){
        this.selectedPassoutyearValues.push(this.passoutyear[i])
      }
    })
    console.log(this.selectedPassoutyearValues)
    this.favpassouterror=this.selectedPassoutyearValues.length > 0?false:true;
  }
  getselectedSkillValues(){
    this.selectedSkillValues=[];
    this.skillArray.controls.forEach((control,i)=>{
      if (control.value){
        this.selectedSkillValues.push(this.skills[i])
      }
    })
    console.log(this.selectedSkillValues)
    this.favskillerror=this.selectedSkillValues.length > 0?false:true;
  }

  checkfavpassoutcontroltouched(){
    let flg=false;
    this.passoutArray.controls.forEach(control=>{
      if (control.touched){
        flg=true;
      }
    })
    return flg;
  }
  checkfavskillcontroltouched(){
    let flg=false;
    this.skillArray.controls.forEach(control=>{
      if (control.touched){
        flg=true;
      }
    })
    return flg;
  }

// submitHandler() {
//   const qlfnItem=this.selectedQualificationValues;
//   const passItem=this.selectedPassoutyearValues
//   const skillItem=this.selectedValues
//  let  jobposts={...this.reactiveForm.value,qlfnItem,passItem,skillItem}
//   console.log({...this.reactiveForm,qlfnItem,passItem,skillItem})


//   this.jobportalservice.jobpost(jobposts)
//   .subscribe(
    
//     (res:any)=>{
//      alert("Successfully saved the details")
   
//     },
//     (err:any)=>{
//      alert('Already exist')
     
    
//    })

  

// }



submitHandler() {
  this.reactiveForm.markAllAsTouched();
  if (this.reactiveForm.valid && !this.favskillerror && !this.favpassouterror && !this.favqualificationerror ){

 
  const qlfnItem=this.selectedQualificationValues;
  const passItem=this.selectedPassoutyearValues
  const skillItem=this.selectedSkillValues
 let  jobpostsadmin={...this.reactiveForm.value,qlfnItem,passItem,skillItem}
  console.log({...this.reactiveForm,qlfnItem,passItem,skillItem})


  this.jobportalservice.jobpostadmin(jobpostsadmin)
  .subscribe(
    
    (res:any)=>{
     alert("Successfully saved the details")
     this.router.navigate(['']);
   
    },
    (err:any)=>{
     alert('Already exist')
     
    
   })


  }

}
}
  

