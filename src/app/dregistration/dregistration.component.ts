import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dregistration',
  templateUrl: './dregistration.component.html',
  styleUrls: ['./dregistration.component.css']
})
export class DregistrationComponent implements OnInit {
  model: any={};
  
  constructor(private router: Router) { }
  onSubmit() {
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  ngOnInit() {
    
   }
   
}
