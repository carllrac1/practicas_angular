import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { DistanciasComponent } from './tarea/distancias/distancias.component';
import { TareaModule } from './tarea/tarea.module';



@NgModule({
  declarations: [
    ResistenciasComponent,
    CinepolisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ResistenciasComponent,
    CinepolisComponent,
  ]
})
export class PracticasModule { }
