import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BarraComponent,
    TareaComponent
  ],
  
  
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    BarraComponent,
    TareaComponent
  ]
})
export class BarraTareasModule { }
