import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DetailedsignupComponent } from './detailedsignup/detailedsignup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmequalValidatorDirective } from './shared/confirm-equal-validator.directive';
import { JobportalService } from './jobportal.service';
import { AdminComponent } from './admin/admin.component';
import { AdmineligiblesubmissionsComponent } from './admineligiblesubmissions/admineligiblesubmissions.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AlumniNewRegComponent } from './alumni-new-reg/alumni-new-reg.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { EcreatedjobsComponent } from './ecreatedjobs/ecreatedjobs.component';
import { EeligiblesubmissionsComponent } from './eeligiblesubmissions/eeligiblesubmissions.component';
import { EmpNewRegComponent } from './emp-new-reg/emp-new-reg.component';
import { EmployerComponent } from './employer/employer.component';
import { FacNewRegComponent } from './fac-new-reg/fac-new-reg.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FcreatedjobsComponent } from './fcreatedjobs/fcreatedjobs.component';
import { FeligiblesubmissionsComponent } from './feligiblesubmissions/feligiblesubmissions.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { AlumniGuard } from './alumni.guard';
import { TokenInterceptorService } from './token-interceptor.service';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    DetailedsignupComponent,
    LoginComponent,
    ConfirmequalValidatorDirective,
    AdminComponent,
    AdmineligiblesubmissionsComponent,
    AlumniComponent,
    AlumniNewRegComponent,
    AppliedjobsComponent,
    EcreatedjobsComponent,
    EeligiblesubmissionsComponent,
    EmpNewRegComponent,
    EmployerComponent,
    FacNewRegComponent,
    FacultyComponent,
    FcreatedjobsComponent,
    FeligiblesubmissionsComponent,
    FooterComponent,
    DescriptionComponent,
    ApplicationFormComponent,
    JobpostComponent,
    JobpostemployerComponent,
    JobpostfacultyComponent,
    DetailverialumniComponent,
    DetailedsignfacultyComponent,
    DetailverifacultyComponent,
    DetailedsignemployerComponent,
    DetailveriemployerComponent,
    VerifyformComponent,
  ],
    
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [JobportalService,AlumniGuard,FacultyGuard,EmployerGuard,AuthGuard,AdminGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
