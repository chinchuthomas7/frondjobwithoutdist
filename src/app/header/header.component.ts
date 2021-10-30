import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobportalService } from '../jobportal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(public jobportal:JobportalService, private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
    localStorage.removeItem('getAlumni')
    localStorage.removeItem('getFaculty')
    localStorage.removeItem('getEmployer')
    localStorage.removeItem('getAdmin')
    localStorage.removeItem('loginmail')
    localStorage.removeItem('token')
    localStorage.removeItem('eachfacultyId')
    localStorage.removeItem('eachemployerId')
    localStorage.removeItem('eachalumniId')
    localStorage.removeItem('appliedId')
    localStorage.removeItem('jobId')
    localStorage.removeItem('toadminId')
    localStorage.removeItem('toaemployerId')
    localStorage.removeItem('tofacultyId')

    this._router.navigate(['login'])
  }
}
