import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html'
})
export class BarraComponent implements OnInit {
  @Output() search:EventEmitter<string> = new EventEmitter();
  constructor() {

    
   }
   nombre:String='';
  ngOnInit(): void {
  }
  busqueda(){
    console.log(this.nombre)
  }
}
