import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciasComponent } from './distancias/distancias.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";



@NgModule({
  declarations: [
    DistanciasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    DistanciasComponent
  ]
})
export class TareaModule { }
