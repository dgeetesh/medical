import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front/front.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DisplayComponent } from './display/display.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MoreComponent } from './more/more.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DregistrationComponent } from './dregistration/dregistration.component';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

import { DloginComponent } from './dlogin/dlogin.component';
import { ModelComponent } from './model/model.component';
import { ArticleComponent } from './article/article.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PatientComponent } from './patient/patient.component';
import { DocpageComponent } from './docpage/docpage.component';

import { InstructionComponent } from './instruction/instruction.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FeedbackhospitalComponent } from './feedbackhospital/feedbackhospital.component';
import { HospitalAppointmentComponent } from './hospital-appointment/hospital-appointment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
 
  {path:'doctors',component:DoctorsComponent},
   {path: 'register', component:RegisterComponent},
   {path: 'home',component:HomeComponent},
   {path:'front',component:FrontComponent},
   {path:'BookAppointment',component:BookAppointmentComponent},
   {path:'doctordetails/:id',component:DoctordetailsComponent},
   {path:'display',component:DisplayComponent},
   {path:'logout',component:LogoutComponent},
   {path:'aboutus',component:AboutusComponent},
   {path:'',component:MoreComponent},
   {path:'medicines',component:MedicinesComponent},
   {path:'diseases',component:DiseasesComponent},
   {path:'dregistration',component:DregistrationComponent},
   { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
   {path:'dlogin',component:DloginComponent},
   {path:'model',component:ModelComponent},
   {path:'article',component:ArticleComponent},
   {path:'feedback',component:FeedbackComponent},
   {path:'patient',component:PatientComponent},
   {path:'docpage',component:DocpageComponent},
  
   {path:'instruction',component:InstructionComponent},
   {path:'adminhome',component:AdminhomeComponent},
   {path:'userregister',component:UserregisterComponent},
   {path:'userlogin',component:UserloginComponent},
   {path:'feedbackhospital',component:FeedbackhospitalComponent},
   {path:'hospital-appointment',component:HospitalAppointmentComponent},
   {path:'adminlogin',component:AdminloginComponent},
   {path:'startpage',component:StartpageComponent}
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
