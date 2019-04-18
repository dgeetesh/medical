import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatDatepickerModule, MatDialogModule,MatTableModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatDialogModule,MatTableModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],

exports: [MatNativeDateModule,FormsModule,
MatDatepickerModule,MatDialogModule,MatTableModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],

})

export  class  MyMaterialModule { }