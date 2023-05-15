import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraTareasModule } from './barra-tareas/barra-tareas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarraTareasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
