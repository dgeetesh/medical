import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  model: any={};

  constructor(private router: Router,private http: HttpClient) { }
  onSubmit()
  {
    debugger
    this.http.post("http://localhost:53404/api/DoctorAppointment",this.model, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe( response=>{
      console.log(response);
        if(response)
        {
          this.router.navigate(['/feedback']);
        }
    });
  } 
  ngOnInit() {
    
  }
  
}

