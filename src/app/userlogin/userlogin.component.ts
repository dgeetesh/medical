import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  model: any={};
  constructor(private http: HttpClient,private router: Router) { }
  onSubmit()
  {
    debugger
    this.http.get("http://localhost:53404/api/User?pw="+this.model.password+"&userName="+this.model.username+"").subscribe( response=>{
      console.log(response);
      if(response)
      {
        this.router.navigate(['/home']);
      }
    });
    //this.http.post("http://localhost:53404/api/User",this.model, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe( response=>{
     // console.log(response);
     // this.model=response;
    
  } 
  ngOnInit() {
  }

}
