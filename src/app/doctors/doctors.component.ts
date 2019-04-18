import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Doctor} from '../doctor'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  selectedDoctor : string = "temp";
  hospitals:any;
  private url="http://localhost:53404/api/Hospital";
  constructor(private dataService: DataService, private router:Router,http: HttpClient) { 
    http.get(this.url).subscribe( response=>{
    console.log(response);
    this.hospitals=response;
  });}

  ngOnInit() {
    this.getDoctorList();
  } 
getDoctorList(): void {
  this.dataService.getDoctorList().subscribe(
    (doctors: Doctor[]) => {
      this.doctors = doctors;
      this.selectedDoctor = doctors[0].name;
      console.log(doctors)
    });
}

setSelectedDoctor( cust : string ): void {
  this.selectedDoctor = cust ;
}

goToDetailsPage(id : number) : void {
  this.router.navigateByUrl("/doctordetails/"+id);
}
}

