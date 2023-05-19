import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html'
})
export class BarraComponent implements OnInit {
  filtro:String="";
  @Output() search= new EventEmitter<String>();
  constructor() {

    
   }
  
  ngOnInit(): void {
  }
  busqueda(){
   
  this.search.emit(this.filtro)
  }
}
