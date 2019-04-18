import { Component, OnInit } from '@angular/core';
import { DoctorDetails } from '../doctordetails';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit {
  doctorDetails: DoctorDetails = null;
  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getDoctorDetails();
  }
  getDoctorDetails(): void {
    this.activeRoute.params.subscribe(routeParams => {

      this.dataService.getDoctorDetails(routeParams.id).subscribe(

        (doctorDetails: DoctorDetails) => {
          this.doctorDetails = doctorDetails;
          console.log(doctorDetails);
        });

    });

  }

  goToDoctorPage() : void {
    this.router.navigateByUrl("/doctors");
  }

}
