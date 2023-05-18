import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TablaComponent,
    FiltroComponent
  ]
})
export class TablasModule { }
