import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JobportalService } from './jobportal.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {
  constructor(private jobportal:JobportalService, private _router:Router){}
  canActivate():boolean{
    if(this.jobportal.employerIn())
    {
      return true
    }
    else{this._router.navigate([''])
    return false
  }
    
}} 
 
