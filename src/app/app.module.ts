import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import{FrontComponent} from './front/front.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DisplayComponent } from './display/display.component';
import { DoctorsComponent } from './doctors/doctors.component'
import { LogoutComponent } from './logout/logout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MoreComponent } from './more/more.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DregistrationComponent } from './dregistration/dregistration.component';
import { DloginComponent } from './dlogin/dlogin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ModelComponent } from './model/model.component';
import { ServiceComponent } from './service/service.component';
import {MyMaterialModule } from "./material.module"; 
import {AuthenticationService} from "./service/auth.service";
import { UserService } from './service/user.service';
import {BarRatingModule} from "ngx-bar-rating";
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



@NgModule({  declarations: [    AppComponent,   
         RegisterComponent, 
            HomeComponent,
            FrontComponent,
            BookAppointmentComponent,
          
            DoctordetailsComponent,
            DisplayComponent,
            DoctorsComponent,
            LogoutComponent,
            AboutusComponent,
            MoreComponent,
            MedicinesComponent,
            DiseasesComponent,
          
            DregistrationComponent,
            DloginComponent,
            AddUserComponent,
            EditUserComponent,
            ListUserComponent,
            ModelComponent,
            ServiceComponent,
            ArticleComponent,
            FeedbackComponent,
            PatientComponent,
            DocpageComponent,
          
            InstructionComponent,
            AdminhomeComponent,
            UserregisterComponent,
            UserloginComponent,
            FeedbackhospitalComponent,
            HospitalAppointmentComponent,
            AdminloginComponent,
            StartpageComponent,
           
            
              ],  
              imports: [    BrowserModule, 
                FormsModule, ReactiveFormsModule, 
               AppRoutingModule ,HttpClientModule, MyMaterialModule,BrowserAnimationsModule,BarRatingModule ],
                     providers: [AuthenticationService,UserService], 
     bootstrap: [AppComponent]})
     export class AppModule { }
     