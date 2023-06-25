import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticasModule } from './practicas/practicas.module';
import { TareaModule } from './practicas/tarea/tarea.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PracticasModule,
    TareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
