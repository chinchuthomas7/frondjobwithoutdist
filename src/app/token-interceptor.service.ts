import { Injectable, Injector } from '@angular/core';
import { JobportalService } from './jobportal.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private injector: Injector) { }
  intercept(req:any,nxt:any)
  {
    let jobportalService=this.injector.get(JobportalService)
    let tokenizedreq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${jobportalService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedreq)
  }
}
