import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlumniNewRegComponent } from './alumni-new-reg/alumni-new-reg.component';

@Injectable({
  providedIn: 'root'
})
export class JobportalService {

  constructor(private http:HttpClient) { }

  // -----------------------------Sign Up------------------------
  newUser(item:any){
     return this.http.post<any>("/api/signup/insert", {"user":item})
    // return this.http.post<any>("http://localhost:9500/signup/insert", {"user":item})
  }

// -----------------------------Login------------------------

  loginUser(customer:any){
    return this.http.post<any>('/api/login',customer)
     // return this.http.post<any>("http://localhost:9500/login",customer)
  
 }
// -----------------------------Alumni detais to DB------------------------
 newDetail(item:any){
   return this.http.post("/api/alumni/insert", {"alumnidetail":item})
  //  return this.http.post("http://localhost:9500/alumni/insert", {"alumnidetail":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }


  // -----------------------------Jobpostemployer to DB------------------------
 jobpost(item:any){
  return this.http.post<any>("/api/jobpost/insert", {"jobdetail":item})
   // return this.http.post<any>("http://localhost:9500/jobpost/insert", {"jobdetail":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }

    // -----------------------------Jobpostfaculty to DB------------------------
 jobpostfaculty(item:any){
   return this.http.post<any>("/api/jobpostfaculty/insert", {"jobdetailfaculty":item})
   // return this.http.post<any>("http://localhost:9500/jobpostfaculty/insert", {"jobdetailfaculty":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }

     // -----------------------------Jobpostadmin to DB------------------------
 jobpostadmin(item:any){
   return this.http.post<any>("/api/jobpostadmin/insert", {"jobdetailadmin":item})
  // return this.http.post<any>("http://localhost:9500/jobpostadmin/insert", {"jobdetailadmin":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }
// -----------------------------Alumni detais to display------------------------

  getAlumnidetails(){
    
    // return this.http.get("http://localhost:9500/details/forverification/alumni/");
    return this.http.get('/api/details/forverification/alumni/')
  }

//----------------------------get employercount--------------------
//  getEmployercount(){
    
//    return this.http.get("http://localhost:9500/employercount");
//   // return this.http.get('/api/employercount')
// }

// -----------------------------Faculty detais to display------------------------

getFacultydetails(){
    
  //return this.http.get("http://localhost:9500/details/forverification/faculty/");
   return this.http.get('/api/details/forverification/faculty/')
}

getEmployerdetails(){
  // return this.http.get("http://localhost:9500/details/forverification/employer/");
  return this.http.get("/api/details/forverification/employer/");
}
// -----------------------------Confirm Alumni detais ------------------------

getindvalumreq(id:any){
   return this.http.get("/api/indvalumreq/"+id);
 // return this.http.get("http://localhost:9500/indvalumreq/"+id);
}

// -----------------------------Checking status of  alumni ------------------------

getstatusalum(id:any){
   return this.http.get("/api/statusalum/"+id);
 // return this.http.get("http://localhost:9500/statusalum/"+id);
}


getstatusempl(id:any){
   return this.http.get("/api/statusempl/"+id);
 //  return this.http.get("http://localhost:9500/statusempl/"+id);
}

getstatusfacu(id:any){
  return this.http.get("/api/statusfacu/"+id);
  // return this.http.get("http://localhost:9500/statusfacu/"+id);
}
// -----------------------------Checking candidate  verified or not details for button disable  ------------------------

getstatusverif(id:any){
   return this.http.get("/api/resumeverified/"+id);
  // return this.http.get("http://localhost:9500/resumeverified/"+id);
}


// -----------------------------Confirm employerdetais ------------------------

getindvemplreq(id:any){
   return this.http.get("/api/indvemplreq/"+id);
 // return this.http.get("http://localhost:9500/indvemplreq/"+id);
}


// -----------------------------Confirm faculty detais ------------------------

getindvfacreq(id:any){
   return this.http.get("/api/details/indvfacreq/"+id);
 // return this.http.get("http://localhost:9500/details/indvfacreq/"+id);
}
// -----------------------------Confirm Alumni detais ------------------------
confirmalumni(alumni:any)
{
   console.log(alumni)
 // return this.http.put<any>("http://localhost:9500/update/alumni",alumni)
  return this.http.put<any>("/api/update/alumni",alumni)
//   .subscribe(data=>{
//     console.log(data)
//  })

}

// -----------------------------Confirm Faculty detais ------------------------
confirmfaculty(faculty:any)
{
  return this.http.put<any>("/api/update/faculty",faculty)
 // return this.http.put<any>("http://localhost:9500/update/faculty",faculty)
//   .subscribe(data=>{
//     console.log(data)
//  })

}

// -----------------------------Confirm Employer detais ------------------------
confirmemployer(employer:any)
{
  return this.http.put<any>("/api/update/employer",employer)
 //  return this.http.put<any>("http://localhost:9500/update/employer",employer)
//   .subscribe(data=>{
//     console.log(data)
//  })

}

// -----------------------------Deny Alumni detais ------------------------
deleteAlumni(id:any)
{
  return this.http.delete("/api/remove/alumni/"+id)
 // return this.http.delete("http://localhost:9500/remove/alumni/"+id)

}
// -----------------------------Deny employer detais ------------------------
deleteEmployer(id:any)
{
  return this.http.delete("/api/remove/employer/"+id)
 // return this.http.delete("http://localhost:9500/remove/employer/"+id)

}


// -----------------------------Deny faculty detais ------------------------
deleteFaculty(id:any)
{
  return this.http.delete("/api/remove/faculty/"+id)
 // return this.http.delete("http://localhost:9500/remove/faculty/"+id)

}
// -----------------------------Faculty detais to DB------------------------
newFacultyDetail(item:any){
 

  return this.http.post("/api/faculty/insert", {"facultydetail":item})
 //  return this.http.post("http://localhost:9500/faculty/insert", {"facultydetail":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }

  // -----------------------------Employer detais to DB------------------------
newEmployerDetail(item:any){
  return this.http.post("/api/employer/new/insert", {"employerdetail":item})
  //  return this.http.post("http://localhost:9500/employer/new/insert", {"employerdetail":item})
 

  }
 // -----------------------------Employer detais to admin dashboard------------------------
  employerprofile(item:any){
   
    return this.http.get<any>("/api/employerprofile/"+item);
    // return this.http.get<any>("http://localhost:9500/employerprofile/"+item);
} 
// -----------------------------Faculty detais to admin dashboard------------------------
facultyprofile(item:any){
  
  return this.http.get<any>("/api/facultyprofile/"+item);
   // return this.http.get<any>("http://localhost:9500/facultyprofile/"+item);
} 

// -----------------------------Faculty detais to admin dashboard------------------------
alumniprofile(item:any){
  
  return this.http.get<any>("/api/alumniprofile/"+item);
   // return this.http.get<any>("http://localhost:9500/alumniprofile/"+item);
} 

// -----------------------------employer created jobs detais to employer dashboard------------------------
employercreatedjobs(item:any){
  return this.http.get<any>("/api/employercreatedjobs/"+item);
 // return this.http.get<any>("http://localhost:9500/employercreatedjobs/"+item);
}

// -----------------------------employer created jobs detais to employer dashboard------------------------
facultycreatedjobs(item:any){
  
  return this.http.get<any>("/api/facultycreatedjobs/"+item);
 // return this.http.get<any>("http://localhost:9500/facultycreatedjobs/"+item);
 }

 // -----------------------------employer created jobs detais to employer dashboard------------------------
admincreatedjobs(item:any){
 
  return this.http.get<any>("/api/admincreatedjobs/"+item);
 // return this.http.get<any>("http://localhost:9500/admincreatedjobs/"+item);
 }

// -----------------------------get eligible submisions  to employer dashboard------------------------
geteligibletoemployer(item:any){
  
  return this.http.get<any>("/api/eligibletoemployer/"+item);
  // return this.http.get<any>("http://localhost:9500/eligibletoemployer/"+item);
 }

 geteligibletoadmin(item:any){

  return this.http.get<any>("/api/eligibletoadmin/"+item);
 // return this.http.get<any>("http://localhost:9500/eligibletoadmin/"+item);
 }

 geteligibletofaculty(item:any){
  return this.http.get<any>("/api/eligibletofaculty/"+item);
 // return this.http.get<any>("http://localhost:9500/eligibletofaculty/"+item);
 }


getEmployernameforhomepage(item:any){
 
  return this.http.get<any>("/api/employernameforhome/"+item);
   // return this.http.get<any>("http://localhost:9500/employernameforhome/"+item);
} 

getjobs(){
  return this.http.get("/api/jobs")
 // return this.http.get("http://localhost:9500/jobs")
}
getindvjobpage(id:any){
  
  return this.http.get("/api/indvjob/"+id);
// return this.http.get("http://localhost:9500/indvjob/"+id);
} 

//liyaappliedjobs
newApply(item:any){
  return this.http.post("/api/insertappliedjob",{"product":item})
 // return this.http.post("http://localhost:9500/insertappliedjob",{"product":item})
  .subscribe(data =>{console.log(data)})
}
getappliedjob(id:any){
  return this.http.get("/api/appliedjobtodesc/"+id);
 // return this.http.get("http://localhost:9500/appliedjobtodesc/"+id);
}
getappliedtoalumni(item:any){
  return this.http.get("/api/appliedtoalumni/"+item);
 // return this.http.get("http://localhost:9500/appliedtoalumni/"+item);
}

getverifysubmission(id:any){
 
  return this.http.get("/api/appliedforverification/"+id);
// return this.http.get("http://localhost:9500/appliedforverification/"+id);
} 


forwardeligible(candidates:any){
  console.log(candidates)
  return this.http.put<any>("/api/eligiblecandidates/candidates",candidates);
 // return this.http.put<any>("http://localhost:9500/eligiblecandidates/candidates",candidates);
} 

deleteJobadmin(id:any)
{
  console.log(id)
  return this.http.delete("/api/remove/adminjob/"+id)
  // return this.http.delete("http://localhost:9500/remove/adminjob/"+id)

}
deleteJobemployer(id:any)
{
  console.log(id)
  return this.http.delete("/api/remove/employerjob/"+id)
 //  return this.http.delete("http://localhost:9500/remove/employerjob/"+id)

}
deleteJobfaculty(id:any)
{
  console.log(id)
  return this.http.delete("/api/remove/facultyjob/"+id)
  // return this.http.delete("http://localhost:9500/remove/facultyjob/"+id)

}


// -----------------------------Roles------------------------

 alumniIn(){
  return!! localStorage.getItem('getAlumni')
}
facultyIn(){
  return!! localStorage.getItem('getFaculty')
}
employerIn(){
  return!! localStorage.getItem('getEmployer')
}
adminIn(){
  return!! localStorage.getItem('getAdmin')
}
getToken(){
  return localStorage.getItem('token')
}
loggedIn()
{
  return!!localStorage.getItem('token')
}
getindvalumni(id:any){
 
  return this.http.get("/api/"+id);
 // return this.http.get("http://localhost:9500/"+id);
} 

// indveligible

geteligibletoadmindvidual(id:any){
  return this.http.get("/api/eligibletoadmindividual/"+id);
 // return this.http.get("http://localhost:9500/eligibletoadmindividual/"+id);
}

geteligibletoemployerdvidual(id:any){
  return this.http.get("/api/eligibletoemplindividual/"+id);
 // return this.http.get("http://localhost:9500/eligibletoemplindividual/"+id);
}

geteligibletofacultydvidual(id:any){
  console.log(id)
  return this.http.get("/api/eligibletofacultyindividual/"+id);
 // return this.http.get("http://localhost:9500/eligibletofacultyindividual/"+id);
}



}

