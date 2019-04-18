import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public input: any;
  constructor(private router: Router) { 
    this.input = {
      "username": "minumukati",
      "password": "abc123"
  };
  }
  login() 
  {
    if(this.input.username && this.input.password)
     {
       console.log("sucessfully login");
       this.router.navigate(['/adminhome']);
     }
  }
  ngOnInit() {
  }

}
