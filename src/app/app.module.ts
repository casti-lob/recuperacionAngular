import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraTareasModule } from './barra-tareas/barra-tareas.module';
import { CounterModule } from './counter/counter.module';
import { FormsModule } from '@angular/forms';
import { FormularioModule } from './formulario/formulario.module';
import { TablasModule } from './tablas/tablas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarraTareasModule,
    CounterModule,
    FormsModule,
    FormularioModule,
    TablasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
