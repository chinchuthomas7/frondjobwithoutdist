import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JobportalService } from './jobportal.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private jobportal:JobportalService, private _router:Router){}
    canActivate():boolean{
      if(this.jobportal.adminIn())
      {
        return true
      }
      else{this._router.navigate([''])
      return false
    }
      
  }} 
   