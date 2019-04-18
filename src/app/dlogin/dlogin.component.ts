import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit {

  profileList: any;
  constructor(private router: Router) { }
  

  ngOnInit() {
    this.profileList=  ['User','Doctor','Admin']; 
    console.log(this.profileList);
    
    {
      this.router.navigate(['/login']); 
    }
  }

}

