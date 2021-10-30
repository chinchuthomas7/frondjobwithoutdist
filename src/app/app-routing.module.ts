import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DetailedsignupComponent } from './detailedsignup/detailedsignup.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FcreatedjobsComponent } from './fcreatedjobs/fcreatedjobs.component';
import { FeligiblesubmissionsComponent } from './feligiblesubmissions/feligiblesubmissions.component';
import { EmployerComponent } from './employer/employer.component';
import { EeligiblesubmissionsComponent } from './eeligiblesubmissions/eeligiblesubmissions.component';
import { EcreatedjobsComponent } from './ecreatedjobs/ecreatedjobs.component';
import { AdminComponent } from './admin/admin.component';
import { AdmineligiblesubmissionsComponent } from './admineligiblesubmissions/admineligiblesubmissions.component';
import { EmpNewRegComponent } from './emp-new-reg/emp-new-reg.component';
import { FacNewRegComponent } from './fac-new-reg/fac-new-reg.component';
import { AlumniNewRegComponent } from './alumni-new-reg/alumni-new-reg.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { DescriptionComponent } from './description/description.component';
import { AlumniGuard } from './alumni.guard';
import { FacultyGuard } from './faculty.guard';
import { EmployerGuard } from './employer.guard';
import { AuthGuard } from './auth.guard';
import { JobpostemployerComponent } from './jobpostemployer/jobpostemployer.component';
import { JobpostfacultyComponent } from './jobpostfaculty/jobpostfaculty.component';
import { AdminGuard } from './admin.guard';
import { DetailverialumniComponent } from './detailverialumni/detailverialumni.component';
import { DetailedsignfacultyComponent } from './detailedsignfaculty/detailedsignfaculty.component';
import { DetailverifacultyComponent } from './detailverifaculty/detailverifaculty.component';
import { DetailedsignemployerComponent } from './detailedsignemployer/detailedsignemployer.component';
import { DetailveriemployerComponent } from './detailveriemployer/detailveriemployer.component';
import { VerifyformComponent } from './verifyform/verifyform.component';
import { IndveligadminComponent } from './indveligadmin/indveligadmin.component';
import { IndveligemployerComponent } from './indveligemployer/indveligemployer.component';
import { IndveligfacultyComponent } from './indveligfaculty/indveligfaculty.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
    {
      path:'home',
      component:HomeComponent
    },
 {
   path:'',
      component:HomeComponent
    },
      {
        path:'login',
      component:LoginComponent
    }, 
    {
      path:'detailedsignup',
    component:DetailedsignupComponent
  }, 
  {
    path:'alumni',
    canActivate:[AlumniGuard],
    component:AlumniComponent
    
  },
  {
    path:'appliedjobs',
    canActivate:[AlumniGuard],
    component:AppliedjobsComponent
  },
  {
    path:'faculty',
    canActivate:[FacultyGuard], 
    component:FacultyComponent
  },
  {
    path:'fcreatedjobs',
    canActivate:[FacultyGuard], 
    component:FcreatedjobsComponent
  },
  
  {
    path:'feligiblesubmissions', 
    canActivate:[FacultyGuard], 
    component:FeligiblesubmissionsComponent
  },
  {
    path:'employer', 
    canActivate:[EmployerGuard],
    component:EmployerComponent
  },
  {
    path:'eeligiblesubmissions',
    canActivate:[EmployerGuard],
    component:EeligiblesubmissionsComponent
  },
  {
    path:'ecreatedjobs',
    canActivate:[EmployerGuard],
    component:EcreatedjobsComponent
  },
  {
    path:'admin',
    canActivate:[AuthGuard,AdminGuard],
     component:AdminComponent

  },
  {
    path:'admineligiblesubmissions', component:AdmineligiblesubmissionsComponent
  },
  {
    path:'empNewReg', component:EmpNewRegComponent
  },
  {
    path:'facNewReg', component:FacNewRegComponent
  },
  {
    path:'alumniNewReg', component:AlumniNewRegComponent
  },

  {
    path:'verifyform', component:VerifyformComponent
  },
  {

    path:'applicationForm', 
    canActivate:[AuthGuard, AlumniGuard],
    component:ApplicationFormComponent
  },
  {
    path:'jobpostemployer',
    canActivate:[AuthGuard,EmployerGuard],
     component:JobpostemployerComponent
  },
  {
    path:'jobpostfaculty',
    canActivate:[AuthGuard,FacultyGuard],
     component:JobpostfacultyComponent
  },
  {
    path:'jobpost',
    canActivate:[AuthGuard,AdminGuard],
     component:JobpostComponent
  },
  {
    path:'indvpage',
    canActivate:[AuthGuard],
    component:DescriptionComponent
  },
  {
    path:'alumnisignup', component:DetailedsignupComponent
  },
  {
    path:'employersignup', component:DetailedsignemployerComponent
  },
  {
    path:'detailverialumni', component:DetailverialumniComponent
  },
  {
    path:'detailveriemployer', component:DetailveriemployerComponent
  },
  {
    path:'facultysignup', component:DetailedsignfacultyComponent
  },
  {
    path:'detailverifaculty', component:DetailverifacultyComponent
  },
  {
    path:'indveligbemployer',component:IndveligemployerComponent
  },
  {
    path:'indveligbadmin',component:IndveligadminComponent
  },
  {
    path:'indveligbfaculty',component:IndveligfacultyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
