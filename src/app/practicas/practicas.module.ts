import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { PizzasComponent } from './pizzas/pizzas.component';



@NgModule({
  declarations: [
    ResistenciasComponent,
    CinepolisComponent,
    PizzasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ResistenciasComponent,
    CinepolisComponent,
    PizzasComponent,
  ]
})
export class PracticasModule { }
