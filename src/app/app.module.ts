import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticasModule } from './practicas/practicas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PracticasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
