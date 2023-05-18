import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {
  filtro:String=""
  @Output() filtrar = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    console.log(this.filtro)
    this.filtrar.emit(this.filtro)
  }
}
