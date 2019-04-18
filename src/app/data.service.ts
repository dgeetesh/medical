import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from './doctor';
import { DoctorDetails } from './doctordetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getDoctorList(): Observable<Doctor[]> {
    return (this.http.get<Doctor[]>("assets/samplejson/doctorlist.json"));
  }

  public getDoctorDetails(id: number): Observable<DoctorDetails> {
    return (this.http.get<DoctorDetails>("assets/samplejson/doctor" + id + ".json"));
  }
}