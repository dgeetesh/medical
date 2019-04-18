import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any={};
  
  constructor(private http: HttpClient,private router: Router) 
  {
    
  }
  
    onSubmit()
    {
      debugger
      this.http.post("http://localhost:53404/api/User",this.model, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe( response=>{
        console.log(response);
       // this.model=response;
        this.router.navigate(['/userlogin']);
      });
    } 
  /*onSubmit() {
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }*/
 
  ngOnInit() {
    
  }

 

  //doRegister(){
   // console.log('clicked',this.model);
   //if(this.model.firstName && this.model.lastName && this.model.email && this.model.password ==="full")
      //{ 
       // console.log("register successfully");
      // this.router.navigate(['/login']);
         
  //}
  //else{
   // this.router.navigate(['/register']);
    //}
  // }  
}
